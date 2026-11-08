'use strict';
(async()=>{
 const svg=document.getElementById('network');
 const make=(name,attributes={},text)=>{const el=document.createElementNS('http://www.w3.org/2000/svg',name);for(const[key,value]of Object.entries(attributes))el.setAttribute(key,String(value));if(text!==undefined)el.textContent=text;return el;};
 const short={about:'关于地瓜丸',platform:'FPGA 教学平台','tide-composer':'潮汐作曲家',waveform:'把波形真正看清',hardware:'硬件与逐针手册',streaming:'高速数据流',skills:'能力与作品证据',fpga:'FPGA 与数字逻辑',web:'网页交互', 'content-creation':'真实功能演示',remotion:'Remotion 动画',maintenance:'个人网站维护',debugging:'从反馈定位问题',interaction:'交互与信息呈现','ai-collaboration':'与 AI 一起做项目',workflow:'从想法到上线',decisions:'做取舍的原则',timeline:'更新与成长记录',now:'我最近在做什么',contact:'找到我'};
 let data;
 try{const response=await fetch('data.json');if(!response.ok)throw new Error('Graph data unavailable');data=await response.json();}catch(error){document.getElementById('graph-error').hidden=false;document.getElementById('count').textContent='可从档案首页继续阅读';return;}
 const groups=data.groups,notes=data.notes;
 const positions={profile:{x:800,y:170},projects:{x:1200,y:400},skills:{x:1200,y:850},creation:{x:800,y:1080},methods:{x:400,y:850},experience:{x:400,y:400}};
 const center={x:800,y:610};
 for(const[group,config]of Object.entries(groups)){
  Object.assign(config,positions[group]);
  const members=notes.filter(n=>n.group===group);
  members.forEach((note,index)=>{
   const gap=78;
   if(group==='profile'||group==='creation'){
    note.x=config.x+(index-(members.length-1)/2)*210;note.y=config.y;
   }else{
    note.x=config.x+(group==='projects'||group==='skills'?130:-130);
    note.y=config.y+(index-(members.length-1)/2)*gap;
   }
  });
 }
 const edgeLayer=make('g',{'aria-hidden':'true'}),groupLayer=make('g',{'aria-hidden':'true'}),nodeLayer=make('g');
 svg.append(edgeLayer,groupLayer,nodeLayer);
 const edges=[],nodeElements=new Map(),groupElements=new Map();
 const line=(a,b,kind)=>{const el=make('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,class:'edge '+(kind||'')});edgeLayer.append(el);edges.push({el,a:a.id,b:b.id});};
 for(const[group,config]of Object.entries(groups)){
  const point={...config,id:group};line({...center,id:'dgw'},point,'primary');
  const g=make('g');g.append(make('circle',{cx:config.x,cy:config.y,r:8,fill:config.color,class:'group-hub'}),make('text',{x:config.x,y:config.y-24,'text-anchor':'middle',fill:config.color,class:'group-label'},config.name));
  groupLayer.append(g);groupElements.set(group,g);
  for(const note of notes.filter(n=>n.group===group))line(point,note);
 }
 const seen=new Set();
 for(const note of notes)for(const id of note.related){const other=notes.find(n=>n.id===id);const key=[note.id,id].sort().join(':');if(other&&!seen.has(key)){seen.add(key);line(note,other);}}
 const root=make('g',{class:'graph-node',role:'link',tabindex:0,'aria-label':'打开关于地瓜丸'});
 root.append(make('circle',{cx:center.x,cy:center.y,r:78,class:'center-ring'}),make('text',{x:center.x,y:center.y-4,'text-anchor':'middle',class:'center-title'},'地瓜丸'),make('text',{x:center.x,y:center.y+25,'text-anchor':'middle',class:'center-sub'},'AI 共创档案'));
 nodeLayer.append(root);
 const navigate=(note)=>{location.href=note.href;};
 const preview=(note)=>{document.getElementById('preview-category').textContent=groups[note.group]?.name||'个人创作';document.getElementById('preview-title').textContent=note.title||note.label;document.getElementById('preview-summary').textContent=note.summary;document.getElementById('preview-link').href=note.href;};
 root.addEventListener('click',()=>{if(!dragged)navigate(data.center);});root.addEventListener('keydown',event=>{if(event.key==='Enter')navigate(data.center);});
 for(const note of notes){
  const config=groups[note.group];let anchor='middle',offsetX=0,offsetY=34;
  if(note.group==='projects'||note.group==='skills'){anchor='start';offsetX=20;offsetY=7;}
  if(note.group==='methods'||note.group==='experience'){anchor='end';offsetX=-20;offsetY=7;}
  const element=make('g',{class:'graph-node',tabindex:0,role:'link','aria-label':'阅读：'+note.title,'data-note':note.id});
  const labelWidth=(short[note.id]||note.title).length*22;
  const hitX=anchor==='end'?note.x-30-labelWidth:anchor==='start'?note.x-17:note.x-labelWidth/2-10;
  element.append(make('rect',{x:hitX,y:note.y-18,width:Math.max(70,labelWidth+48),height:anchor==='middle'?73:43,fill:'transparent'}));
  element.append(make('circle',{cx:note.x,cy:note.y,r:9,fill:config.color}),make('text',{x:note.x+offsetX,y:note.y+offsetY,'text-anchor':anchor},short[note.id]||note.title),make('title',{},note.summary));
  element.addEventListener('pointerenter',()=>preview(note));element.addEventListener('focus',()=>preview(note));
  element.addEventListener('click',()=>{if(!dragged)navigate(note);});
  element.addEventListener('keydown',event=>{if(event.key==='Enter')navigate(note);});
  nodeLayer.append(element);nodeElements.set(note.id,element);
 }
 let selectedGroup='all',query='';
 const filters=document.getElementById('filters'),list=document.getElementById('note-list');
 for(const[group,config]of Object.entries(groups)){
  const button=document.createElement('button');button.type='button';button.dataset.group=group;button.textContent=config.name;button.setAttribute('aria-pressed','false');filters.append(button);
 }
 const render=()=>{
  const matches=notes.filter(note=>(selectedGroup==='all'||note.group===selectedGroup)&&(!query||(note.title+' '+note.summary).toLowerCase().includes(query)));
  const ids=new Set(matches.map(n=>n.id)),activeGroups=new Set(matches.map(n=>n.group));
  for(const[id,el]of nodeElements){const show=ids.has(id);el.classList.toggle('muted',!show);el.setAttribute('tabindex',show?'0':'-1');el.setAttribute('aria-hidden',show?'false':'true');el.style.pointerEvents=show?'auto':'none';}
  for(const[group,el]of groupElements)el.classList.toggle('muted',!activeGroups.has(group));
  for(const edge of edges){const relevant=(ids.has(edge.a)||activeGroups.has(edge.a)||edge.a==='dgw')&&(ids.has(edge.b)||activeGroups.has(edge.b)||edge.b==='dgw');edge.el.classList.toggle('muted',!relevant);}
  list.replaceChildren();
  for(const note of matches){const li=document.createElement('li'),a=document.createElement('a'),dot=document.createElement('i');a.href=note.href;dot.style.background=groups[note.group].color;a.append(dot,document.createTextNode(note.title));a.addEventListener('focus',()=>preview(note));a.addEventListener('pointerenter',()=>preview(note));li.append(a);list.append(li);}
  if(!matches.length){const item=document.createElement('li');item.className='no-result';item.textContent='没有找到匹配的笔记，换个关键词试试。';list.append(item);}
  document.getElementById('count').textContent=matches.length+' 篇笔记 · '+(selectedGroup==='all'?'六个主题':groups[selectedGroup].name);
  document.getElementById('list-count').textContent=String(matches.length);
  filters.querySelectorAll('button').forEach(button=>{const active=button.dataset.group===selectedGroup;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
 };
 filters.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;selectedGroup=button.dataset.group;render();});
 document.getElementById('search').addEventListener('input',event=>{query=event.target.value.trim().toLowerCase();render();});
 let view={x:0,y:0,w:1600,h:1250},drag=null,dragged=false;
 const apply=()=>svg.setAttribute('viewBox',`${view.x} ${view.y} ${view.w} ${view.h}`);
 const zoom=(factor)=>{const width=Math.max(480,Math.min(2600,view.w*factor)),ratio=width/view.w;view.x+=view.w*(1-ratio)/2;view.y+=view.h*(1-ratio)/2;view.w=width;view.h*=ratio;apply();};
 document.getElementById('zoom-in').addEventListener('click',()=>zoom(.78));document.getElementById('zoom-out').addEventListener('click',()=>zoom(1.28));
 document.getElementById('reset').addEventListener('click',()=>{view={x:0,y:0,w:1600,h:1250};apply();selectedGroup='all';query='';document.getElementById('search').value='';render();});
 svg.addEventListener('wheel',event=>{event.preventDefault();zoom(event.deltaY>0?1.1:.9);},{passive:false});
 svg.addEventListener('pointerdown',event=>{if(event.button!==0)return;dragged=false;drag={x:event.clientX,y:event.clientY,vx:view.x,vy:view.y};svg.classList.add('panning');if(!event.target.closest('.graph-node'))svg.setPointerCapture(event.pointerId);});
 svg.addEventListener('pointermove',event=>{if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)<5)return;dragged=true;const box=svg.getBoundingClientRect();const scale=Math.max(view.w/box.width,view.h/box.height);view.x=drag.vx-dx*scale;view.y=drag.vy-dy*scale;apply();});
 const end=()=>{drag=null;svg.classList.remove('panning');};svg.addEventListener('pointerup',end);svg.addEventListener('pointercancel',end);svg.addEventListener('pointerleave',end);
 render();preview(notes.find(n=>n.id==='platform'));
 window.archiveGraph={ready:true,noteCount:notes.length,reset:()=>document.getElementById('reset').click()};
})();

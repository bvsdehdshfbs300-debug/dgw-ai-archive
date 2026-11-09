import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
const root=process.cwd();
const result=spawnSync(process.execPath,['quartz/bootstrap-cli.mjs','build'],{stdio:'inherit'});
if(result.status!==0)process.exit(result.status||1);
// Preserve the exact filenames of the dedicated interactive graph page.
for(const name of ['index.html','graph.css','graph.js','data.json']){
 fs.copyFileSync(path.join(root,'content/graph',name),path.join(root,'public/graph',name));
}
fs.writeFileSync(path.join(root,'public/.nojekyll'),'');
for(const name of ['index','index.css','index.js']){
 const obsolete=path.join(root,'public/graph',name);
 if(fs.existsSync(obsolete))fs.unlinkSync(obsolete);
}
const expected=JSON.parse(fs.readFileSync(path.join(root,'content/graph/data.json'),'utf8'));
for(const note of expected.notes){
 if(!fs.existsSync(path.join(root,'public',note.id+'.html')))throw new Error('Missing public note '+note.id);
}
console.log('Verified all public note pages and copied the interactive graph.');
for(const slug of ['platform','tide-composer','maintenance','tide-technology']){
 const html=fs.readFileSync(path.join(root,'public',slug+'.html'),'utf8');
 for(const marker of ['archive-navigation','case-capabilities','archive-lightbox','case-figure']){
  if(!html.includes(marker))throw new Error('Missing '+marker+' on '+slug);
 }
}
const home=fs.readFileSync(path.join(root,'public/index.html'),'utf8');
if(!home.includes('product-hero') || (home.match(/class="feature-story"/g)||[]).length!==6)throw new Error('Expected platform-led home and six feature demonstrations');
console.log('Verified the platform-led home and six complete feature demonstrations.');
// A content page should never silently regress to an unillustrated text-only page.
for(const slug of ['index', ...expected.notes.map(note=>note.id)]){
 const html=fs.readFileSync(path.join(root,'public',slug+'.html'),'utf8');
 const article=html.match(/<article\b[\s\S]*?<\/article>/)?.[0] ?? '';
 if(!/<img\b/.test(article))throw new Error('Missing article image on '+slug);
}
console.log('Verified an article image on every public content page.');
// Media are served from the owner's existing China server; retain local image fallbacks.
const media='https://dgwfpga.cn/portfolio-media/20261109/';
for(const file of fs.readdirSync(path.join(root,'public'),{recursive:true}).filter(name=>name.endsWith('.html'))){
 const output=path.join(root,'public',file);
 let html=fs.readFileSync(output,'utf8');
 // Quartz's extensionless links are accepted by GitHub, but not every static origin.
 // Emit explicit HTML links for both the China mirror and downloaded static copies.
 html=html.replace(/\bhref="([^"]+)"/g,(all,url)=>{
  if(/^(?:[a-z]+:|\/\/|#)/i.test(url))return all;
  const match=url.match(/^([^?#]*)([?#].*)?$/);
  if(!match || !match[1] || match[1].endsWith('/') || path.extname(match[1]))return all;
  const local=match[1].replace(/^\/dgw-ai-archive\//,'/');
  const resolved=local.startsWith('/')?path.join(root,'public',local):path.resolve(path.dirname(output),local);
  if(fs.existsSync(resolved+'.html'))return 'href="'+match[1]+'.html'+(match[2]??'')+'"';
  return all;
 });
 html=html.replace(/\b(src|href|srcset|poster)="([^"]+)"/g,(all,attribute,url)=>{
  if(/^(?:https?:|data:|blob:|#)/.test(url))return all;
  let local=url.replace(/^\/dgw-ai-archive\//,'/');
  const resolved=local.startsWith('/')?path.join(root,'public',local):path.resolve(path.dirname(output),local);
  const relative=path.relative(path.join(root,'public'),resolved).replaceAll('\\','/');
  if(!relative.startsWith('assets/') || !fs.existsSync(resolved))return all;
  return attribute+'="'+media+relative+'"'+(attribute==='src'?' data-local-fallback="'+url+'"':'');
 });
 fs.writeFileSync(output,html);
}
console.log('Applied China-hosted media links with local image fallbacks.');

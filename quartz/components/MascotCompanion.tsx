import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
export default (()=>{
 function MascotCompanion({fileData}:QuartzComponentProps){
  const prefix="../".repeat(String(fileData.slug??"index").split("/").length-1)||"./";
  return <aside class="mascot-companion" aria-label="地瓜丸的吉祥物导航"><details><summary aria-label="打开吉祥物导航"><img src={prefix+"assets/mascot/mascot-explaining.png"} alt="地瓜丸的显示器吉祥物" width="76" height="76"/><span>跟我逛逛</span></summary><div class="mascot-bubble"><strong>代码跑起来，现象看明白。</strong><p>我陪你认识这座 FPGA 实验室。</p><a href="https://dgwfpga.cn/practice/">开始练习 ↗</a><a href={prefix+"mascot.html"}>认识吉祥物 →</a><a href={prefix+"contact.html"}>去找地瓜丸→</a></div></details></aside>
 }
 MascotCompanion.afterDOMLoaded=`(()=>{document.querySelectorAll('[data-load-board]').forEach(button=>button.addEventListener('click',()=>{const wrapper=button.closest('.board-exhibit');const frame=document.createElement('iframe');frame.src=button.dataset.loadBoard;frame.title='地瓜丸 FPGA 教学平台 3D 硬件桌面';frame.allow='fullscreen';frame.loading='eager';wrapper.replaceChildren(frame);wrapper.classList.add('loaded')}));document.querySelectorAll('img[data-local-fallback]').forEach(img=>{img.addEventListener('error',()=>{const p=img.closest('picture');if(p)p.querySelectorAll('source').forEach(s=>s.remove());const local=img.dataset.localFallback;delete img.dataset.localFallback;img.src=local},{once:true})})})();`;
 return MascotCompanion;
}) satisfies QuartzComponentConstructor

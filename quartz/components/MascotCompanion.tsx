import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
export default (()=>{
 function MascotCompanion({fileData}:QuartzComponentProps){
  const prefix="../".repeat(String(fileData.slug??"index").split("/").length-1)||"./";
  return <aside class="mascot-companion" aria-label="地瓜丸的吉祥物导航"><details><summary aria-label="打开吉祥物导航"><img src={prefix+"assets/mascot/mascot-explaining.png"} alt="地瓜丸的显示器吉祥物" width="76" height="76"/><span>跟我逛逛</span></summary><div class="mascot-bubble"><strong>代码跑起来，现象看明白。</strong><p>我陪你认识这座 FPGA 实验室。</p><a href="https://dgwfpga.cn/practice/">开始练习 ↗</a><a href={prefix+"mascot.html"}>认识吉祥物 →</a><a href={prefix+"contact.html"}>去找地瓜丸→</a></div></details></aside>
 }
 MascotCompanion.afterDOMLoaded=`(()=>{
  if(window.__dgwExhibitReady)return;
  window.__dgwExhibitReady=true;
  document.addEventListener('click',event=>{
   const chapter=event.target.closest?.('[data-video-seek]');
   if(chapter){const video=document.getElementById(chapter.dataset.videoTarget);if(!(video instanceof HTMLVideoElement))return;const seconds=Number(chapter.dataset.videoSeek);if(!Number.isFinite(seconds)||seconds<0)return;const seek=()=>{video.currentTime=Math.min(seconds,Number.isFinite(video.duration)?video.duration:seconds);const status=chapter.closest('.field-video-section')?.querySelector('.field-chapter-status');if(status)status.textContent='已定位到 '+chapter.textContent.trim()+'，可继续播放';};if(video.readyState>=1)seek();else{video.addEventListener('loadedmetadata',seek,{once:true});video.preload='metadata';video.load();}video.play().catch(()=>{});return;}
   const filter=event.target.closest?.('[data-gallery-group]');
   if(filter){const gallery=filter.closest('.feature-gallery');const group=filter.dataset.galleryGroup;let count=0;gallery.querySelectorAll('.gallery-card').forEach(card=>{const show=group==='all'||card.dataset.group===group;card.hidden=!show;if(show)count++});gallery.querySelectorAll('[data-gallery-group]').forEach(button=>button.setAttribute('aria-pressed',String(button===filter)));const output=gallery.querySelector('[data-gallery-count]');if(output)output.textContent='正在展示 '+count+' 张真实功能截图';return;}
   const button=event.target.closest?.('[data-load-board]');if(!button)return;
   const wrapper=button.closest('.board-exhibit');if(!wrapper)return;
   const frame=document.createElement('iframe');frame.src=button.dataset.loadBoard;
   frame.title='地瓜丸 FPGA 教学平台 3D 硬件桌面';frame.allow='fullscreen';frame.loading='eager';
   wrapper.replaceChildren(frame);wrapper.classList.add('loaded');
  });
  const fallback=img=>{
   if(!(img instanceof HTMLImageElement)||!img.dataset.localFallback)return;
   let local=img.dataset.localFallback;delete img.dataset.localFallback;
   const picture=img.closest('picture');
   if(picture){const source=[...picture.querySelectorAll('source')].find(s=>matchMedia(s.media).matches);if(source)local=local.slice(0,local.lastIndexOf('/')+1)+source.srcset.split('/').pop();picture.querySelectorAll('source').forEach(s=>s.remove());}
   img.src=local;
  };
  document.addEventListener('error',event=>fallback(event.target),true);
  const check=()=>document.querySelectorAll('img[data-local-fallback]').forEach(img=>{if(img.complete&&!img.naturalWidth)fallback(img)});
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',check,{once:true});else check();
 })();`;
 return MascotCompanion;
}) satisfies QuartzComponentConstructor

(()=>{
  if(window.__dgwExhibitReady)return;
  window.__dgwExhibitReady=true;
  document.addEventListener('click',event=>{
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
 })();
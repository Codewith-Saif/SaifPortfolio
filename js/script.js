
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));links?.classList.toggle('open')});
const lightbox=document.createElement('div');
lightbox.className='lightbox';lightbox.innerHTML='<button aria-label="Close">×</button><img alt="">';document.body.appendChild(lightbox);
const lbImg=lightbox.querySelector('img');const close=()=>lightbox.classList.remove('open');
document.querySelectorAll('.case-gallery img').forEach(img=>img.addEventListener('click',()=>{lbImg.src=img.src;lbImg.alt=img.alt;lightbox.classList.add('open')}));
lightbox.addEventListener('click',e=>{if(e.target===lightbox||e.target===lightbox.querySelector('button'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});

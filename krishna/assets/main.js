// small progressive enhancement: add fade-in to blocks on load
document.addEventListener('DOMContentLoaded', ()=> {
  document.querySelectorAll('.block').forEach((el, i)=>{
    el.style.opacity = 0;
    el.style.transform = 'translateY(8px)';
    setTimeout(()=>{
      el.style.transition = 'opacity .45s ease, transform .45s ease';
      el.style.opacity = 1;
      el.style.transform = 'none';
    }, 120 * i);
  });
});

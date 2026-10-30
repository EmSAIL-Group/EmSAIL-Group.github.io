const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// Featured research: auto-advance, manual navigation, and pause when not visible.
(() => {
  const root = document.querySelector('.hero-carousel');
  if (!root) return;
  const slides = [...root.querySelectorAll('.hero-slide')];
  const dots = [...root.querySelectorAll('.hero-dot')];
  let active = 0;
  let timer;
  const interval = 6500;
  function show(index) {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      const selected = i === active;
      slide.classList.toggle('is-active', selected);
      slide.setAttribute('aria-hidden', String(!selected));
      slide.querySelectorAll('a').forEach(a => a.tabIndex = selected ? 0 : -1);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === active);
      dot.setAttribute('aria-selected', String(i === active));
    });
  }
  function stop() { clearInterval(timer); }
  function start() { stop(); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => show(active + 1), interval); }
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));
  document.getElementById('heroPrev').addEventListener('click', () => { show(active - 1); start(); });
  document.getElementById('heroNext').addEventListener('click', () => { show(active + 1); start(); });
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', e => { if (!root.contains(e.relatedTarget)) start(); });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
  show(0); start();
})();

(function () {
  const carousel=document.querySelector('.project-carousel');
  if(!carousel)return;
  const slides=[...carousel.querySelectorAll('.project-slide')];
  const dots=[...document.querySelectorAll('.project-pagination button')];
  let active=0;
  function show(i){
    active=(i+slides.length)%slides.length;
    slides.forEach((slide,j)=>{const selected=j===active;slide.classList.toggle('is-current',selected);slide.setAttribute('aria-hidden',String(!selected));});
    dots.forEach((dot,j)=>{dot.classList.toggle('is-current',j===active);if(j===active)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});
  }
  carousel.querySelector('.project-prev').addEventListener('click',()=>show(active-1));
  carousel.querySelector('.project-next').addEventListener('click',()=>show(active+1));
  dots.forEach((dot,i)=>dot.addEventListener('click',()=>show(i)));
  carousel.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')show(active-1);if(e.key==='ArrowRight')show(active+1)});
})();

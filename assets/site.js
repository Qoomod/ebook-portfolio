const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('mainNav');
toggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const links=[...document.querySelectorAll('.main-nav a')];
const sections=[...document.querySelectorAll('main section[id]')];
const setActive=()=>{let y=window.scrollY+120;let current='top';for(const s of sections){if(s.offsetTop<=y)current=s.id}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))};
window.addEventListener('scroll',setActive,{passive:true});setActive();

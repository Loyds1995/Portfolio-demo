import '../components/style.css'
import '../components/header.css'
import '../components/nav.css'
import '../components/hero.css'
import '../components/about.css'
import '../components/skills.css'
import '../components/training-cert.css'
import '../components/work-project.css'
import '../components/footer.css'
import '../components/util/util.css'


const menuBtn = document.querySelector('.nav-menu-bar');
const menuLink = document.querySelector('.nav-menu-link');
const closeBtn = document.querySelector('.closeBtn');

menuBtn.addEventListener('click', ()=>{
  menuLink.classList.add('nav-menu-content');
  console.log(menuBtn);
});

closeBtn.addEventListener('click', ()=>{
  menuLink.classList.remove('nav-menu-content');
});
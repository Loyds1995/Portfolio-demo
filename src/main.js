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

import { skills, skills2 } from './data/skills'

// nav menu
document.addEventListener('DOMContentLoaded', function () {
  const sections =  document.querySelectorAll('.main');
  const menuBtn = document.querySelector('.nav-menu-bar');
  const menuLink = document.querySelector('.nav-menu-link');
  const closeBtn = document.querySelector('.closeBtn');
  const navLinks = document.querySelectorAll('.nav-link a');
  
  menuBtn.addEventListener('click', () => {
    menuLink.classList.add('nav-menu-content');
    menuLink.style.width = "200px";
    sections.forEach((section)=>{
      section.style.opacity = '0.2';
    })
    
    
  });
  
  closeBtn.addEventListener('click', () => {
    menuLink.classList.remove('nav-menu-content');
    sections.forEach((section)=>{
      section.style.opacity = '1';
    })
  });
  
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLink.classList.remove('nav-menu-content');
      sections.forEach((section)=>{
        section.style.opacity = '1';
      })
    });
  });
});


// // skills

let htmlSkills='';

skills.forEach((skill)=>{
  htmlSkills += `<ul class="skills-content-1-list">
  <li class="skills-list-1">${skill}</li>
  </ul>`;
});

document.querySelector('.skills-content-1').innerHTML = htmlSkills;

let htmlSkills2 = '';
skills2.forEach((skills)=>{
  htmlSkills2 += `<ul class="skills-content-2-list">
  <li class="skills-list-2">
  ${skills.skillList1.List1} ${skills.skillList1.List2}
  </li>
  <li class="skills-list-2">
  ${skills.skillList2.List1}<br>${skills.skillList2.List2}
  </li>
  </ul>
  `;
});

document.querySelector('.skills-content-2').innerHTML = htmlSkills2;
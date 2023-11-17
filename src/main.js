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

import {skills, skills2 } from './data/skills/skills.js'
import { skillsHtml } from './data/skills/skillsHtml.js'
 document.addEventListener('DOMContentLoaded', function(){
  skillsHtml();

  // nav menu
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
 } )





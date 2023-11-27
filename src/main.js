import "../components/style.css";
import "../components/header.css";
import "../components/nav.css";
import "../components/hero.css";
import "../components/about.css";
import "../components/skills.css";
import "../components/training-cert.css";
import "../components/work-project.css";
import "../components/footer.css";
import "../components/util/util.css";

import { htmlProfile } from "./profile/profile";
import { htmlAbout } from "./about/aboutHtml";
import { htmlSkills } from "./skills/skillsHtml";
import { htmlCertificate } from "./cert/certHtml";
import { htmlProject } from "./work/projectsHtml";
import { htmlContact } from "./footer/footerHtml";

document.addEventListener("DOMContentLoaded", function () {
  // for skills section
  htmlProfile();
  htmlAbout();
  htmlSkills();
  htmlCertificate();
  htmlProject();
  htmlContact();

  // nav menu
  const sections = document.querySelectorAll(".main");
  const menuBtn = document.querySelector(".nav-menu-bar");
  const menuLink = document.querySelector(".nav-menu-link");
  const closeBtn = document.querySelector(".closeBtn");
  const navLinks = document.querySelectorAll(".nav-link a");

  menuBtn.addEventListener("click", () => {
    menuLink.classList.toggle("nav-menu-link-mobile");
    document.body.style.overflow = "hidden";
    sections.forEach((section) => {
      section.style.opacity = "0.2";
      section.style.transition = ".5s";
    });

    navLinks.forEach((link, index) => {
      link.style.transition = "none";
      link.style.opacity = "0";
      link.style.transform = "translateX(100%)";
    });
  
    setTimeout(() => {
      navLinks.forEach((link, index) => {
        link.style.transition = `all 0.5s ${index * 0.1}s`;
        link.style.opacity = "1";
        link.style.transform = "translateX(0)";
      });
    }, 100);
  });

  closeBtn.addEventListener("click", () => {
    menuLink.classList.remove("nav-menu-link-mobile");
    document.body.style.overflow = "auto";
    sections.forEach((section) => {
      section.style.opacity = "1";
    });

  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLink.classList.remove("nav-menu-link-mobile");
      document.body.style.overflow = "auto";
      sections.forEach((section) => {
        section.style.opacity = "1";
      });
    });
  });

  // end of nav menu
});

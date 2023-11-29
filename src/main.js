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
import { arrowUp } from "./arrowUp";
import { navMenu } from "./navMenu";

document.addEventListener("DOMContentLoaded", function () {
  // for skills section
  htmlProfile();
  htmlAbout();
  htmlSkills();
  htmlCertificate();
  htmlProject();
  htmlContact();
  // scrollUp
  arrowUp();
  // nav menu
  navMenu();


 function blur(){
    console.log('click')
  }
});

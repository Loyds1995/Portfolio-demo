import { skills, skills2 } from "./skills";

export function skillsHtml() {
  let htmlSkills = "";

  skills.forEach((skill) => {
    htmlSkills += `
      <li class="skills-list-1">${skill}</li>`;
  });

  document.querySelector(".skills-content-1-list").innerHTML = htmlSkills;

  let htmlSkills2 = "";
  skills2.forEach((skills) => {
    htmlSkills2 += `
      <li class="skills-list-2">
      ${skills.skillList1.List1} ${skills.skillList1.List2}
      </li>
      <li class="skills-list-2">
      ${skills.skillList2.List1}<br>${skills.skillList2.List2}
      </li>
      `;
  });

  document.querySelector(".skills-content-2-list").innerHTML = htmlSkills2;
}

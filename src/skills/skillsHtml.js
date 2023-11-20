import { skills } from "./skills";

export function htmlSkills() {
  let skillsHtml = "";

  skills.forEach((skill) => {
    skillsHtml += `
    <div class="skills-content">
    <span class="skills-span"></span>
    <div class="skills-content-1">
      <ul class="skills-content-1-list">
        ${skill.skillsList
          .map((item) => `<li class="skills-list-1">${item}</li>`)
          .join("")}  
      </ul>
    </div>
    <div class="skills-content-2">
      <ul class="skills-content-2-list">
        <li class="skills-list-2">
        ${skill.skillList1.List1}
        ${skill.skillList1.List2}
        </li>
        <li class="skills-list-2">
        ${skill.skillList2.List1}
        ${skill.skillList2.List2}
        </li>
      </ul>
    </div>
  </div>
  `;
  });
  document.getElementById("skills").innerHTML = skillsHtml;
}

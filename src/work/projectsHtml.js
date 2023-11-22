import { projects } from "./projects";

export function htmlProject() {
  let projectHtml = "";

  projects.forEach((proj) => {
    projectHtml += `
        <div class="proj-heading">
        <h3>${proj.heading}</h3>
      </div>

      <div class="proj-container">
        <div class="proj-content">
          <div class="proj-name">
            <h4>
              <a
                href="${proj.projectSrc.lotterySrc}"
                target="_blank"
                rel="noopener noreferrer"
                >${proj.projectName[0]}r</a
              >
            </h4>
          </div>

          <img
            class="proj-img"
            src="${proj.projectImg.img1}"
            alt=""
            srcset=""
          />
          <span class="proj-description">Description </span>
          <p class="proj-desc-details">
           ${proj.projectDesc.lotteryDesc}
          </p>
        </div>

        <div class="proj-content">
          <div class="proj-name">
            <h4>
              <a
                href="${proj.projectSrc.englishSrc}"
                target="_blank"
                rel="noopener noreferrer"
                >${proj.projectName[1]}</a
              >
            </h4>
          </div>

          <img
            class="proj-img"
            src="${proj.projectImg.img2}"
            alt=""
            srcset=""
          />
          <span class="proj-description">Description </span>
          <p class="proj-desc-details">
          ${proj.projectDesc.englishDesc}
          </p>
        </div>
      </div>
        `;
  });
  document.querySelector(".work-project").innerHTML = projectHtml;
}

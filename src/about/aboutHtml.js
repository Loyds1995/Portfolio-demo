import { aboutInfo } from "./about";

export function htmlAbout() {
  let aboutHtml = "";

  aboutInfo.forEach((about) => {
    aboutHtml += `
        <div class="about-heading">
        <h3>${about.heading}</h3>
        </div>
        <div class="about-content">
        <img src="${about.imgs.img1}" alt="" />
        <img src="${about.imgs.img2}" alt="" />
        <p>${about.about1}</p>
        <p>${about.about2}</p>
        <p>${about.about3}</p>
        </div>
        <div class="about-info">
        <button class="about-bday">${about.bday}</button>
        <button class="about-status">${about.status}</button>
        <button class="about-citizenship">${about.citizenship}</button>
        </div>
        `;
  });

  document.getElementById("about").innerHTML = aboutHtml;
}

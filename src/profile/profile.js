import { infos } from "./profile-info";

export function htmlProfile() {
  let profileHtml = "";

  infos.forEach((info) => {
    profileHtml += `
        <div class="hero-img">
        <img src="${info.img}" alt="profile image">
        </div>
        <div class="hero-vr-line"></div>
        <div class="hero-profile-info">
        <p><span>Name:</span>${info.name}</p>
        <p></p><span>Nickname:</span>${info.nickname}</p>
        <p><span>Address:</span>${info.address}</p>
        </div>
        
        <div class="hero-more-info btn">
        <a href="#about">More Info</a>
        </div>
        
        <div class="hero-hr-line"></div>
        <div class="hero-vr2-line"></div>
        <div class="hero-hr2-line"></div>
        <div class="hero-vr3-line"></div>
        `;
  });

  document.querySelector(".hero").innerHTML = profileHtml;
}

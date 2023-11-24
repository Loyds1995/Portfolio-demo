import { contacts } from "./footer";

export function htmlContact() {
  let contacHtml = "";

  contacts.forEach((contact) => {
    contacHtml += `
    <div class="footer-card">
    <span class="footer-span1"></span>
    <span class="footer-span2"></span>
    <div class="footer-img">
      <img src="${contact.img}" alt="">
    </div>
    <div class="footer-content">
      <span>${contact.name}</span>
      <span>${contact.contactContent.mobile.name}</span> ${contact.contactContent.mobile.number}
      <span>${contact.contactContent.email.name}</span>${contact.contactContent.email.mail}
    </div>
  </div>
`;
  });
  document.querySelector(".footer").innerHTML = contacHtml;
}

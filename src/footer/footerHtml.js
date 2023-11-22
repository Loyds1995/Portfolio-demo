import { contacts } from "./footer";

export function htmlContact() {
  let contacHtml = "";

  contacts.forEach((contact) => {
    contacHtml += `
    <div class="footer-contact">
    <h4>${contact.contact}</h4>
  </div>
  <div class="footer-contact-content">
    <p><span>${contact.contactContent.mobile.name}:</span>${contact.contactContent.mobile.number}</p>
    <p><span>${contact.contactContent.email.name}:</span>${contact.contactContent.email.mail}</p>
  </div>
  <span class="footer-span1"></span>
  <span class="footer-span2"></span>
  <span class="footer-span3"></span>
  <span class="footer-span4"></span>
  <span class="footer-span5"></span>
`;
  });
  document.querySelector(".footer").innerHTML = contacHtml;
}

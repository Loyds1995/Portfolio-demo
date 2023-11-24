import { contacts } from "./footer";

export function htmlContact() {
  let contacHtml = "";

  contacts.forEach((contact) => {
    contacHtml += `
 
`;
  });
  document.querySelector(".footer").innerHTML = contacHtml;
}

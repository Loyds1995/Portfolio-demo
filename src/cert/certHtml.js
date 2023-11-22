import { certificate } from "./certificates";

export function htmlCertificate() {
  let certHtml = "";

  certificate.forEach((cert) => {
    certHtml += `
    <div class="training-heading">
        <h3>${cert.heading}</h3>
      </div>

      <div class="training-container">
        <div class="training-content">
          <h4>${cert.heading2}</h4>
          <ul class="training-list">
            <li class="training-list-name">
            ${cert.trainingListName}
            </li>
            <li class="training-date">${cert.trainingDate}</li>
          </ul>
        </div>

        <div class="certificate-content">
          <h4>${cert.heading3}</h4>
          <ul class="certificate-list">
            <li class="certificate-name">
            ${cert.certificateNameList.name.name1}
            </li>
            <li class="certificate-date">${cert.certificateNameList.date.date1}</li>
            <li class="certificate-name">
            ${cert.certificateNameList.name.name2}
            </li>
            <li class="certificate-date">${cert.certificateNameList.date.date2}</li>
          </ul>
        </div>
      </div>
    `;
  });
  document.querySelector(".training-work-exp").innerHTML = certHtml;
}

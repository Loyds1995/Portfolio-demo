export function navMenu() {
    const sections = document.querySelectorAll(".main");
  const menuBtn = document.querySelector(".nav-menu-bar");
  const menuLink = document.querySelector(".nav-menu-link");
  const closeBtn = document.querySelector(".closeBtn");
  const navLinks = document.querySelectorAll(".nav-link a");

  menuBtn.addEventListener("click", () => {
    menuLink.classList.toggle("nav-menu-link-mobile");
    if (menuLink.classList.contains("nav-menu-link-mobile")) {
      document.body.style.overflow = "hidden";
      sections.forEach((section) => {
        section.style.opacity = "0.2";
        section.style.transition = ".5s";
      });

      navLinks.forEach((link, index) => {
        link.style.transition = "none";
        link.style.opacity = "0";
      });
    
      setTimeout(() => {
        navLinks.forEach((link, index) => {
          link.style.transition = `opacity 0.5s ${index * 0.2}s`;
          link.style.opacity = "1";
        });
      }, 100);

    } else {
      document.body.style.overflow = "auto";
      sections.forEach((section) => {
        section.style.opacity = "1";
      });
    }
  });

  closeBtn.addEventListener("click", () => {
    menuLink.classList.remove("nav-menu-link-mobile");
    document.body.style.overflow = "auto";
    sections.forEach((section) => {
      section.style.opacity = "1";
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuLink.classList.remove("nav-menu-link-mobile");
      document.body.style.overflow = "auto";
      sections.forEach((section) => {
        section.style.opacity = "1";
      });
    });
  });
}
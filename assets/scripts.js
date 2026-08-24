const nav = document.querySelector("nav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scrolling down
    nav.classList.add("nav-hidden");
  } else {
    // Scrolling up
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
});

const navLinks = document.querySelectorAll("nav ul a");
const sections = document.querySelectorAll(
  ".home, .projects-section, .contact-section",
);

function updateActiveNav() {
  const scrollPosition = window.scrollY + window.innerHeight * 0.3;

  let activeSection = sections[0];

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      activeSection = section;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${activeSection.id}`,
    );
  });
}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);

import { renderHeader } from "./components/header.js";
import { initHome } from "./pages/home.js";
import { initCitizens } from "./pages/citizensPage.js";
import { initAbout } from "./pages/about.js";
import { initNews } from "./pages/newsPage.js";
import { initConstitution } from "./pages/constitution.js";
import { initModal } from "./components/modal.js";
import { initMobileMenu } from "./components/header.js";

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  document.querySelector("#header").innerHTML = renderHeader();

  if (page === "home") initHome();
  if (page === "citizens") initCitizens();
  if (page === "about") initAbout();
  if (page === "news") initNews();
  if (page === "constitution") initConstitution();

  initModal();
  initMobileMenu();

  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.dataset.link === page) {
      link.classList.add("active");
    }
  });
});
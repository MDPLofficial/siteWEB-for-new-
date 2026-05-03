export function renderHeader() {
  return `
    <h2>МДПЛ</h2>

    <nav class="desktop-nav">
      <a href="index.html" data-link="home">Головна</a>
      <a href="about.html" data-link="about">Про державу</a>
      <a href="citizens.html" data-link="citizens">Громадяни</a>
      <a href="constitution.html" data-link="constitution">Конституція</a>
      <a href="news.html" data-link="news">Новини</a>
    </nav>

    <button class="btn become-citizen-btn">
      Стати громадянином
    </button>

    <button id="burger-btn" class="burger-btn">
      <img src="./icons/burger-bar.png" width="36">
    </button>

    <div class="mobile-menu">

      <button class="close-mobile-btn">✕</button>

      <nav class="mobile-nav">
        <a href="index.html">Головна</a>
        <a href="about.html">Про державу</a>
        <a href="citizens.html">Громадяни</a>
        <a href="constitution.html">Конституція</a>
        <a href="news.html">Новини</a>
      </nav>

    </div>
  `;
}

export function initMobileMenu() {
  const burgerBtn = document.querySelector("#burger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-mobile-btn");

  if (!burgerBtn || !mobileMenu || !closeBtn) return;

  // Відкрити меню
  burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });

  // Закрити меню
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  });

  // Закриття по Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    }
  });

  // Закриття при кліку на link
  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
}
export function renderHeader() {
  return `
    <h2>МДПЛ</h2>
    <nav>
        <a href="index.html" data-link="home">Головна</a>
        <a href="about.html" data-link="about">Про державу</a>
        <a href="citizens.html" data-link="citizens">Громадяни</a>
        <a href="constitution.html" data-link="constitution">Конституція</a>
        <a href="news.html" data-link="news">Новини</a>
    </nav>
    <button id="become-citizen-btn" class="become-citizen-btn">Стати громадянином</button>
  `;
}
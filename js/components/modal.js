let modal = document.querySelector(".backdrop");

export function initModal() {
  document.addEventListener("click", (e) => {
    if (!modal) {
      modal = createModal();
    }

    if (e.target.closest(".become-citizen-btn")) {
      showModal();
    }

    if (e.target.closest(".close-btn")) {
      hideModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideModal();
    }
  });
}

function showModal() {
  modal.classList.add("is-open");
}

function hideModal() {
  modal.classList.remove("is-open");
}

function createModal() {
  const modal = document.createElement("div");
  modal.className = "backdrop";

  modal.innerHTML = `
    <div id="modal" class="modal">
            <div class="container container-modal">
                <button id="close-btn" class="close-btn">X</button>
                <div class="modal-header">
                    <h2>Стати громадянином</h2>
                    <p>Подайте заявку на приєднання до МДПЛ</p>
                </div>
                <form class="blank">
                    <label>
                        Прізвище та Ім'я
                        <input class="contact-modal-form" type="text" name="name" placeholder="Василь Клеменко">
                    </label>
                    <label>
                        Дата народження
                        <input class="contact-modal-form"  type="date" name="date">
                    </label>
                    <label>
                        Мета вступу до МДПЛ
                        <textarea class="contact-modal-form"  name="reason" placeholder="Коротко разкажіть, чому хочете стати частиною держави"></textarea>
                    </label>
                    <label>
                        Ідеї та проєкти
                        <textarea class="contact-modal-form"  name="projects" placeholder="Над чим ви працюєте або хочете працювати..."></textarea>
                    </label>
                    <label>
                        Бажана посада
                        <input class="contact-modal-form"  type="text" name="poste" placeholder="Наприклад: Громадянин, Міністр...">
                    </label>
                    <div class="modal-btns">
                        <button class="btn cancle-btn">Скасувати</button>
                        <button id="submit-btn" class="btn submit-btn">Подати заявку</button>
                    </div>
                </form>
            </div>
        </div>
  `;

  document.body.appendChild(modal);
  return modal;
}
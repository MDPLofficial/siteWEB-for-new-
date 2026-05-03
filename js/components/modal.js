const WEBHOOK_URL = "https://discord.com/api/webhooks/1500347036753723463/M6LLbIDQehv-22pvdimgs5FTJBmqW9vbnw33la7mL2sR9gW4gyAc2t5OfVJilHTXb2f0";

let modal = document.querySelector(".backdrop");

export function initModal() {
  document.addEventListener("click", (e) => {
    if (!modal) {
      modal = createModal();
    }

    const applicationForm = document.querySelector(".blank");

    applicationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let name = applicationForm.elements.name.value;
      let date = applicationForm.elements.date.value;
      let reason = applicationForm.elements.reason.value;
      let projects = applicationForm.elements.projects.value;
      let poste = applicationForm.elements.poste.value;

      document.querySelectorAll(".contact-modal-form").forEach(input => {
        input.classList.remove("error");
      });

      let hasError = false;

      if(!name){
        applicationForm.elements.name.classList.add("error");
        hasError = true;
      }
      if(!date){
        applicationForm.elements.date.classList.add("error");
        hasError = true;
      }
      if(!reason){
        applicationForm.elements.reason.classList.add("error");
        hasError = true;
      }
      if(!projects){
        applicationForm.elements.projects.classList.add("error");
        hasError = true;
      }

      if(hasError) return;

      fetchCitizen(name, date, reason, projects, poste);
      alert("Заявка подана");

      applicationForm.reset();
      hideModal();
    });

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

function fetchCitizen(name, date, reason, projects, poste){
   fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      content: `
        📝 Нова заявка в МДПЛ

        👤 Ім’я: ${name}
        📅 Дата народження: ${date}
        🎯 Мета: ${reason}
        💡 Проєкти: ${projects}
        🏛 Посада: ${poste}
        `
    })
  })
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
                        <button type="submit" id="submit-btn" class="btn submit-btn">Подати заявку</button>
                    </div>
                </form>
            </div>
        </div>
  `;

  document.body.appendChild(modal);
  return modal;
}
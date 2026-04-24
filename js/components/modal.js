const modal = document.querySelector(".backdrop");

export function initModal() {
  document.addEventListener("click", (e) => {
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
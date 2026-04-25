import { getCitizens } from "../../data/api.js";
import { createCitizenCard } from "../components/citizensCard.js";

export async function initCitizens() {
  if (document.body.dataset.page !== "citizens") return;

  const container = document.getElementById("citizens-list");
  if (!container) return;

  const citizens = await getCitizens();

  let html = "";
  citizens.forEach(citizen => {
    html += createCitizenCard(citizen);
  });

  container.innerHTML = html;
}
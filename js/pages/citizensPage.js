import { getCitizens } from "../../data/api.js";
import { createCitizenCard } from "../components/citizensCard.js";

export async function initCitizens() {
  const container = document.getElementById("citizensList");

  const citizens = await getCitizens();

  citizens.forEach(citizen => {
    container.innerHTML += createCitizenCard(citizen);
  });
}
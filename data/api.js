const BASE_URL = "https://69ed3639af4ff533142baa5b.mockapi.io/citizens";

export async function getCitizens() {
  const res = await fetch(BASE_URL + "/citizens");
  return res.json();
}
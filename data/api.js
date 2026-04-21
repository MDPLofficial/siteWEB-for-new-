const BASE_URL = "https://your-mockapi-url";

export async function getCitizens() {
  const res = await fetch(BASE_URL + "/citizens");
  return res.json();
}
export function createCitizenCard(citizen) {
  return `
    <div class="card">
      <h3>${citizen.name}</h3>
      <p>${citizen.role}</p>
    </div>
  `;
}
export function createCitizenCard(citizen) {
  return `
<div class="citizen-card">

  <div class="citizen-left">
    <div class="avatar">${citizen.name[0]}</div>
    <div>
      <h3>${citizen.name}</h3>
      <p>ID: #${citizen.isActive}</p>
    </div>
  </div>

  <div class="citizen-right">
    <span class="role ${citizen.role.roleName.toLowerCase()}">${citizen.role.roleName}</span>
    <p>${citizen.join_year}</p>
  </div>

</div>
`;
}
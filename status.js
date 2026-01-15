// PODMIEŃ CFX NA SWÓJ
const CFX_CODE = "TWOJ_CFX_KOD";

fetch(`https://servers-frontend.fivem.net/api/servers/single/${CFX_CODE}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById("status").textContent = "ONLINE";
    document.getElementById("status").style.color = "#22c55e";
    document.getElementById("players").textContent =
      data.Data.clients + "/" + data.Data.sv_maxclients;
  })
  .catch(() => {
    document.getElementById("status").textContent = "OFFLINE";
    document.getElementById("status").style.color = "red";
  });

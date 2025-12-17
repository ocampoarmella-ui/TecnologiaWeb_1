// Selección de elementos del DOM
const header = document.querySelector("header");
const section = document.querySelector("section");

// URL del JSON (local o remoto)
// Ejemplo local: "cerro-rico.json"
const requestURL =
  "https://raw.githubusercontent.com/ocampoarmella-ui/TecnologiaWeb_1/main/json/turismo.json";

// Crear solicitud
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// Cuando el JSON se cargue
request.onload = function () {
  const data = request.response;
  populateHeader(data);
  showMembers(data);
};

// Función para llenar el header
function populateHeader(jsonObj) {
  const h1 = document.createElement("h1");
  h1.textContent = jsonObj.squadName;

  const p = document.createElement("p");
  p.textContent = `
    Ubicación: ${jsonObj.homeTown} |
    Año: ${jsonObj.formed} |
    Base: ${jsonObj.secretBase}
  `;

  header.appendChild(h1);
  header.appendChild(p);
}

// Función para mostrar los miembros
function showMembers(jsonObj) {
  const members = jsonObj.members;

  members.forEach(member => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const ul = document.createElement("ul");

    h2.textContent = member.name;
    p1.textContent = `Identidad histórica: ${member.secretIdentity}`;
    p2.textContent = `Antigüedad: ${member.age} años`;
    p3.textContent = "Características:";

    member.powers.forEach(power => {
      const li = document.createElement("li");
      li.textContent = power;
      ul.appendChild(li);
    });

    article.append(h2, p1, p2, p3, ul);
    section.appendChild(article);
  });
}

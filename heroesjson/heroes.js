// Selección de elementos del DOM
const header = document.querySelector("header");
const section = document.querySelector("section");

// URL del archivo JSON
const requestURL =
  "https://raw.githubusercontent.com/ocampoarmella-ui/TecnologiaWeb_1/main/json/heroes.json";

// Crear solicitud
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

// Cuando el JSON se cargue
request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

// Función para llenar el header
function populateHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj.squadName;
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    `Hometown: ${jsonObj.homeTown} // Formed: ${jsonObj.formed}`;
  header.appendChild(myPara);
}

// Función para mostrar los héroes
function showHeroes(jsonObj) {
  const heroes = jsonObj.members;

  for (let i = 0; i < heroes.length; i++) {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const ul = document.createElement("ul");

    h2.textContent = heroes[i].name;
    p1.textContent = `Secret identity: ${heroes[i].secretIdentity}`;
    p2.textContent = `Age: ${heroes[i].age}`;
    p3.textContent = "Superpowers:";

    heroes[i].powers.forEach(power => {
      const li = document.createElement("li");
      li.textContent = power;
      ul.appendChild(li);
    });

    article.append(h2, p1, p2, p3, ul);
    section.appendChild(article);
  }
}
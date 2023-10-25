import { createCard, createPagination } from "./ui.js";

const URL = "https://rickandmortyapi.com/api/";
const pagination = document.querySelector(".pagination");

async function requestFetch(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function getCharacters(page = 1) {
  const data = await requestFetch(`${URL}character/?page=${page}`);
  showCharacter(data.results);
}

function getCharactersById(id, titleModal, bodyModal) {
  requestFetch(`${URL}character/${id}`)
    .then((data) => {
      titleModal.innerHTML = data.name;
      let htmlBody = `
        <img src="${data.image}">
        <p>${data.species}</p>
        <p>${data.origin.name}</p>
        `;
      htmlBody += data.status === "Alive"
        ? "<p><span class=\"badge bg-success\">Live</span></p>"
        : `<p><span class="badge bg-danger">${data.status}</span></p>`;
      bodyModal.innerHTML = htmlBody;
    });
}

function showCharacter(characters) {
  const contenedor = document.querySelector(".characters");
  contenedor.innerHTML = "";
  characters.forEach((character) => {
    contenedor.appendChild(createCard(character));
  });
}

function buttonAction(e) {
  e.preventDefault();
  if (e.target.classList.contains("page-link")) {
    const page = e.target.getAttribute("data-id");
    getCharacters(page);
  }
}

function getButtonCard(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn")) {
    const titleModal = document.querySelector(".modal-title");
    const bodyModal = document.querySelector(".modal-body");

    titleModal.innerHTML = "pending...";
    bodyModal.innerHTML = `<i class="fa fa-refresh fa-spin fa-4x"></i>`;

    const id = e.target.getAttribute("data-id");
    getCharactersById(id, titleModal, bodyModal);
  }
}

pagination.innerHTML = createPagination();
getCharacters();

document.querySelector(".characters").addEventListener("click", getButtonCard);
pagination.addEventListener("click", buttonAction);

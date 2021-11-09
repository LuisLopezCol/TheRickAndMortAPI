let consumo_api = (pagina = 1, busqueda = false) => {
  // --------------Print Characters---------------

  let contenedor_pagina = document.querySelector("#data_personajes");
  let info_footer = document.querySelector("#info_footer");
  let character_search = document.getElementById("input_search").value;
  let button_pages = document.getElementById("button_pagesPN");
  let alive_color = "";

  if (!busqueda) {
    if (pagina == 1) {
      var url_api = "https://rickandmortyapi.com/api/character";
    } else {
      var url_api = pagina;
    }
  } else {
    var url_api =
      "https://rickandmortyapi.com/api/character?name=" + input_busqueda;
  }

  let api = fetch(url_api);
  api
    .then((res) => res.json())
    .then((datico_pepe) => {
      contenedor_pagina.innerHTML = "";
      for (const data_personaje of datico_pepe.results) {
        if (data_personaje.status == "Alive") {
          alive_color = "greenyellow";
        } else if (data_personaje.status == "Dead") {
          alive_color = "tomato";
        } else if (data_personaje.status == "unknown") {
          alive_color = "grey";
        }
        contenedor_pagina.innerHTML += `
           <div class="characters d-flex flex-row">
            <div class="picture links" onclick="showCard(${data_personaje.id})">
                <img src=${data_personaje.image} alt="" class="product-img">
            </div>
            <div class="description col">
                <div class="name">
                    <!-- <a href="https://rickandmortyapi.com/api/character/${data_personaje.id}" style="text-decoration: none"> -->
                    <h3 class="links" onclick="showCard(${data_personaje.id})">
                        ${data_personaje.name}
                    </h3>
                    </a>
                </div>
                <div class="live">
                    <div
                        style="background-color: ${alive_color}; height: 12px; width: 12px; border-radius: 50%; margin-top: 3px; margin-right: 10px;">
                    </div>
                    <h6>${data_personaje.status} - ${data_personaje.species}</h6>
                </div>
                <div class="location mt-3">
                    <h5>
                        Last known location:
                    </h5>
                </div>
                <div class="locataion-resp">
                    <a href="${data_personaje.location.url}" style="text-decoration: none">
                        <h4 class="links">
                            ${data_personaje.location.name}
                        </h4>
                    </a>
                </div>
                <div class="first-seen mt-3">
                    <h5>
                        Firts seen in:
                    </h5>
                </div>
                <div class="first-seen-resp">
                    <a href="${data_personaje.origin.url}" style="text-decoration: none">
                        <h4 class="links">
                            ${data_personaje.origin.name}
                        </h4>
                    </a>
                </div>
            </div>
        </div>
        `;
      }
      // ---------Footers logos-------

      info_footer.innerHTML = `
<div class="me-3">CHARACTERS: ${datico_pepe.info.count}</div>
<div class="me-3">LOCATIONS: 126</div>
<div class="">
EPISODES: 51
</div>
`;

      // ---------Pages buttons-------

      let previous_char = "";
      let next_char = "";

      if (datico_pepe.info.prev == null) {
        previous_char = "disabled";
      } else if (datico_pepe.info.next == null) {
        next_char = "disabled";
      }

      button_pagesPN.innerHTML = `
      <button class="pages link-help  button-prev ${previous_char}" onclick="consumo_api('${datico_pepe.info.prev}')">PREVIOUS CHARACTERS</button>;
      <button class="pages link-help  button-next ${next_char}" onclick="consumo_api('${datico_pepe.info.next}')">NEXT CHARACTERS</button>;
      `;
    })
    .catch((error) => console.log(error));
};

consumo_api(1);

// ---------Off Canavas-----------

const cardOverlay = document.querySelector(".card-overlay");
const cardDom = document.querySelector(".card");
const characterName = document.querySelector(".name");
let card_content = document.getElementById("card-content");
let list_episodes = document.getElementById("episodes");

function showCard(id) {
  cardOverlay.classList.add("transparentBcg");
  cardDom.classList.add("showCard");

  var url_cha = "https://rickandmortyapi.com/api/character/" + id;
  let api = fetch(url_cha);

  api
    .then((res) => res.json())
    .then((character) => {
      // card_content.innerHTML = "";
      if (character.status == "Alive") {
        alive_color = "greenyellow";
      } else if (character.status == "Dead") {
        alive_color = "tomato";
      } else if (character.status == "unknown") {
        alive_color = "grey";
      }

      card_content.innerHTML = `
        <div class="d-flex justify-content-center">
                    <img src=${character.image} alt="" class="character-img">
                </div>
                <div class="name col-12">
                    <h4 class="d-flex justify-content-center fs-2">${character.name}</h4>
                </div>
                <div class="live d-flex justify-content-center">
                    <div style="background-color: ${alive_color}; height: 12px; width: 12px; border-radius: 50%; margin-top: 3px; margin-right: 10px;"></div>
                    <p>${character.status} - ${character.species} - ${character.gender}</p>
                </div>
                <div class="api-link links d-flex flex-row justify-content-center">
                    <a href="https://rickandmortyapi.com/api/character/${character.id}"
                        style="text-decoration: none" class="api-query">
                        <span class="fs-6 text-dark">Query the full API <i class="far fa-hand-pointer fs-5"></i></span>
                    </a>
                </div>
                <div class="location mt-3">
                    <p>
                        Character created on:
                    </p>
                </div>
                <div class="locataion-resp">
                      <p class=" d-flex justify-content-center">
                        ${character.created}
                      </p>
                </div>
                <div class="location mt-3">
                    <p>
                        Last known location:
                    </p>
                </div>
                <div class="locataion-resp">
                    <a href="${character.location.url}" style="text-decoration: none">
                        <p class="links d-flex justify-content-center">
                            ${character.location.name}
                        </p>
                    </a>
                </div>
                <div class="first-seen mt-3">
                    <p>
                        Firts seen in:
                    </p>
                </div>
                <div class="first-seen-resp">
                    <a href="${character.origin.url}" style="text-decoration: none">
                        <p class="links d-flex justify-content-center">
                            ${character.origin.name}
                        </p>
                    </a>
                </div>
        `;

      total_episodes = character.episode;
      debugger;
      list_episodes.innerHTML = ``;
      total_episodes.forEach((element) => {
        list_episodes.innerHTML += `
        <li>${element.substring(40, 43)}</li>
        `;
      });
    });
}
function hideCard() {
  cardOverlay.classList.remove("transparentBcg");
  cardDom.classList.remove("showCard");
  card_content.innerHTML = "";
}

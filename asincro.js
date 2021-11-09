let consumo_api = (pagina = 1, busqueda = false) => {
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
        console.log(data_personaje.name);

        if (data_personaje.status == "Alive") {
          alive_color = "greenyellow";
        } else if (data_personaje.status == "Dead") {
          alive_color = "tomato";
        } else if (data_personaje.status == "unknown") {
          alive_color = "grey";
        }
        contenedor_pagina.innerHTML += `
            <div class="characters d-flex flex-row">
              <div class="picture">
                <img src=${data_personaje.image} alt="" class="product-img">
              </div>
              <div class="description col">
                <div class="name">
                <a href="https://rickandmortyapi.com/api/character/${data_personaje.id}" style="text-decoration: none">
                  <h3 class="links">
                    ${data_personaje.name}
                  </h3>
                </a>
                </div>
                <div class="live">
                  <div style="background-color: ${alive_color}; height: 12px; width: 12px; border-radius: 50%; margin-top: 3px; margin-right: 10px;"></div>
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
                  </h4></a>
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

      info_footer.innerHTML = `
        <div class="me-3">CHARACTERS: ${datico_pepe.info.count}</div>
        <div class="me-3">LOCATIONS: 126</div>
            <div class="">
                EPISODES: 51
            </div>
      `;
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

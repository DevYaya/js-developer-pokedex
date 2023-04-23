const infoPokemon = document.querySelector("#infoPokemon");
const arrowLeft = document.querySelector("#back");
const navegation = document.querySelectorAll("nav h2");

arrowLeft.addEventListener("click", resetPokemonCard);

navegation.forEach((element, index) => {
    element.addEventListener("click", () => isActive(index));
});

async function updatePokemon(pokemon) {
  classesPokemonCard(pokemon.type);
  currentPokemon.innerHTML = `
        <span class="name">${pokemon.name}</span>
        <span class="number">#${pokemon.number}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
    `;

  createAbout(pokemon);
}

function classesPokemonCard(className) {
    currentPokemon.parentElement.classList.forEach((classNameActive) => {
        currentPokemon.parentElement.classList.remove(classNameActive);
    });
    currentPokemon.parentElement.classList.add("pokemon");
    currentPokemon.parentElement.classList.add(`${className}`);
}

function resetPokemonCard() {
    resetActive();
    content.classList.remove("hidden");
    pokemonCard.classList.add("hidden");
    navegation[0].classList.add("active");
}

function resetActive() {
    const ols = infoPokemon.querySelectorAll("ol");

    for (let i = 0; i < navegation.length; i++) {
        navegation[i].classList =
        "active" && navegation[i].classList.remove("active");
        ols[i].classList.add("hidden");
    }
}

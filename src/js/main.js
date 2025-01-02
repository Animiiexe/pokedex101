// Import data
import data from './data.json';
console.log(data);

// DOM selection
const inputE1 = document.querySelector('input');
const rowEl = document.querySelector("#row");

// Function to render Pokémon cards
function renderPokemons(list) {
    // Clear existing cards
    rowEl.innerHTML = "";

    // Create cards for each Pokémon in the list
    for (let pokemon of list) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                <img
                    src="${pokemon.image}"
                    class="card-img-top"
                    alt="${pokemon.name}"
                />
                <div class="card-body">
                    <h5 class="card-title">${pokemon.name}</h5>
                    <p class="card-text">
                        ${pokemon.description}
                    </p>
                </div>
            </div>
        `;
        rowEl.appendChild(div);
    }
}

// Initial render (display all Pokémon)
renderPokemons(data);

// Event listener for search input
inputE1.addEventListener('input', function () {
    const query = inputE1.value.toLowerCase();

    // Filter Pokémon based on the search query
    const filteredData = data.filter(pokemon =>
        pokemon.name.toLowerCase().includes(query)
    );

    // Render the filtered Pokémon list
    renderPokemons(filteredData);
});

// Focus input when '/' key is pressed
document.addEventListener('keypress', function (event) {
    if (event.key === '/') {
        event.preventDefault();
        inputE1.focus();
    }
});


function toggaleDarkMode() {
  // Toggle dark mode for the body
  var element = document.body;
  element.classList.toggle("dark-mode");

  // Toggle dark mode for all cards
  var elements = document.querySelectorAll('.card'); // Select all elements with the class 'card'
  elements.forEach(function(card) {
      card.classList.toggle("darkmode-card");
  });
}

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', function() {
  const darkModeButton = document.getElementById('darkModeButton');
  darkModeButton.addEventListener('click', toggaleDarkMode);
});

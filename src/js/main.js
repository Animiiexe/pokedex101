// import Fuse from 'fuse.js';


// alert('hello')


import data from './data.json'
console.log(data);


// dom selection
const inputE1 = document.querySelector('input')

//
const rowEl = document.querySelector("#row")

for(let pokemonj of data){
const div = document.createElement('div');
div.classList.add('col')
div.innerHTML =`<div class="card">
            <img
              src="${pokemonj.image}"
              class="card-img-top"
              alt="${pokemonj.name}"
            />
            <div class="card-body">
              <h5 class="card-title">${pokemonj.name}</h5>
              <p class="card-text">
              ${pokemonj.description}
              </p>
            </div>
          </div>`
rowEl.appendChild(div) 
}

function renderPokemons(list){

}

document.addEventListener('keypress', function(event){
    if(event.key === '/'){
        event.preventDefault();
        inputE1.focus();
    }
   
}
)


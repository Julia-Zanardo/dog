let container = document.querySelector('.container');
let url = let url = 'https://api.thedogapi.com/v1/breeds?limit=10';

function createdog(breed) {
  let div = document.createElement('div');
  div.classList.add('dog-card');
  let img = document.createElement('img');
  let name = document.createElement('h3');
  let life = document.createElement('h4');
  let temperamento = document.createElement('h5');
  let clasificacion = document.createElement('h5');
  name.textContent = `nombre: ${breed.name}`;;
  life.textContent = `esperanza de vida: ${breed.life_span}`;;
  temperamento.textContent = `personalidad: ${breed.temperament}`;;
clasificacion.textContent = `Clasificación: ${breed.breed_group}`;
if (breed.reference_image_id) {
    img.src = `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`;
    img.alt = breed.name;
  }

  div.append(name,life,temperamento, clasificacion, img);
  container.append(div);
}

fetch(url)
  .then(res => res.json())
  .then(breeds => {
    for (let breed of breeds)
      createdog(breed);
  })
  .catch(err => console.error(err));

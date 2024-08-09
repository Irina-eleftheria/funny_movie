const apiKey = 'B1lmuNCxfkD5kzGqi6_q';
const headers = {
  Authorization: `Bearer ${apiKey}`
};

const characterContainer = document.getElementById("character-container");
const button = document.getElementById("lotr__button");
const errorContainer = document.createElement("div");
errorContainer.style.color = "red";
characterContainer.parentNode.insertBefore(errorContainer, characterContainer.nextSibling);

const loadingContainer = document.createElement("div");
loadingContainer.textContent = "Загрузка данных...";
loadingContainer.style.display = "none";
characterContainer.parentNode.insertBefore(loadingContainer, characterContainer.nextSibling);

const fetchAllCharacters = async () => {
  try {
    loadingContainer.style.display = "block";
    const url = 'https://the-one-api.dev/v2/character';
    const response = await fetch(url, { headers });
    if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs;
  } catch (error) {
    errorContainer.textContent = `Ошибка: ${error.message}`;
  } finally {
    loadingContainer.style.display = "none";
    console.log('Запрос завершен');
  }
};

button.addEventListener("click", async () => {
  errorContainer.textContent = "";
  try {
    const characters = await fetchAllCharacters();
    if (characters) {
      characterContainer.innerHTML = "";
      const randomIndex = Math.floor(Math.random() * characters.length);
      const character = characters[randomIndex];
      const characterElement = document.createElement("div");
      characterElement.innerHTML = `
          <h3>${character.name}</h3>
          <p>Статья: ${character.wikiUrl}</p>
          <p>Раса: ${character.race}</p>
          <p>Пол: ${character.gender}</p>
          <p>Дата рождения: ${character.birth}</p>
          <p>Дата смерти: ${character.death}</p>
          <p>Волосы: ${character.hair}</p>
          <p>Рост: ${character.height}</p>
          <p>Королевство: ${character.realm}</p>
          <p>Супруг/а: ${character.spouse}</p>
        `;
      characterContainer.appendChild(characterElement);
    }
  } catch (error) {
    errorContainer.textContent = `Ошибка: ${error.message}`;
  }
});


//Movie gallery with flip-cards
document.addEventListener("DOMContentLoaded", function () {
    const LOTRcardsArray = `[
        {
          "title": "Lord of the Rings: The Fellowship of the Ring",
          "genres": "Action/Adventure, Sci-Fi/Fantasy",
          "year": "2001",
          "url": "./assets/images/LOTR/ring.jpg",
          "about": "In the first part of J.R.R. Tolkien's epic masterpiece, The Lord of the Rings, a shy young hobbit named Frodo Baggins inherits a simple gold ring. He knows the ring has power, but not that he alone holds the secret to the survival--or enslavement--of the entire world. Now Frodo, accompanied by a wizard, an elf, a dwarf, two men and three loyal hobbit friends, must become the greatest hero the world has ever known to save the land and the people he loves."
        },
        {
          "title": "Lord of the Rings: The Two Towers",
          "genres": "Action/Adventure, Oscar Winners, Sci-Fi/Fantasy",
          "year": "2002",
        "url": "./assets/images/LOTR/towers.jpg",
        "about": "In the part second of the Tolkien trilogy, Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring but on separate paths. Their destinies lie at two towers Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Saurons fortress at Barad dur, deep within the dark lands of Mordor."
        },
        {
          "title": "The Lord of the Rings: The Return of the King",
          "genres": "Action/Adventure, Oscar Winners, Sci-Fi/Fantasy",
          "year": "2003",
          "url": "./assets/images/LOTR/king.jpg",
          "about": "One ring to rule them all. One ring to find them. One ring to bring them all and in the darkness bind them.In the conclusion of J.R.R. Tolkien's epic masterpiece, The Lord of the Rings, as armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied only by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power."
        },
      {
          "title": "Hobbit: An Unexpected Journey",
          "genres": "Action/Adventure, Sci-Fi/Fantasy",
          "year": "2012",
          "url": "./assets/images/LOTR/journey.jpg",
          "about": "Academy Award®-winning filmmaker Peter Jackson returns to Middle-earth with the first of three films based on J.R.R. Tolkien's enduring masterpiece. Set in Middle-earth 60 years before the epic Lord of the Rings trilogy, the adventure follows the journey of Bilbo Baggins, who is swept into an epic quest to reclaim the lost Dwarf Kingdom from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf, Bilbo finds himself joining a company of dwarves on a journey into wild, treacherous lands swarming with beasts of every ilk. Although their goal lies to the East, they must first escape the goblin tunnels, where Bilbo meets the creature that will change his life forever...Gollum. Alone with Gollum, on the shores of an underground lake, the unassuming Bilbo gains possession of Gollums precious a simple, gold ring tied to the fate of all Middle-earth."
        },
      {
          "title": "The Hobbit: The Desolation of Smaug",
          "genres": "Action/Adventure, Sci-Fi/Fantasy",
          "year": "2013",
          "url": "./assets/images/LOTR/smaug.jpg",
          "about": "Academy Award winner Peter Jackson continues his Middle-earth adventure following Bilbo Baggins (Martin Freeman) whos swept into an epic quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. In the company of thirteen dwarves and the wizard Gandalf the Grey (Ian McKellen), Bilbo enters the Lonely Mountain in possession of Gollums precious ring and his keen blade, Sting. With an all-star cast and the effects wizardry of Jacksons award-winning Weta Workshop, Tolkien's epic story comes to life as never before imagined."
        },
       {
          "title": "The Hobbit: The Battle of the Five Armies",
          "genres": "Action/Adventure, Drama, Sci-Fi/Fantasy, Suspense/Thriller",
          "year": "2014",
          "url": "./assets/images/LOTR/armies.jpg",
          "about": "Academy Award-winning filmmaker Peter Jackson returns to Middle-earth with the final of three films based on J.R.R. Tolkiens enduring masterpiece. Set in Middle-earth 60 years before the epic Lord of the Rings trilogy, the adventure follows the journey of Bilbo Baggins, who is swept into an epic quest to reclaim the lost Dwarf Kingdom from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf, Bilbo finds himself joining a company of dwarves on a journey into wild, treacherous lands swarming with beasts of every ilk. After reaching Erebor and encountering the dragon Smaug, Five Armies assemble for an epic battle that could decide the future of all in Middle-earth."
        }]`;

    let LOTRcards = JSON.parse(LOTRcardsArray);
    let LOTRcardsContent = "";

    for (let card of LOTRcards) {
    LOTRcardsContent += `
      <div class='card-container'>
        <div class='LOTRcard'>
          <div class='card-front'>
            <img class='LOTRcard__image' src='${card.url}' alt='Movie image'/>
            <h3>${card.title}</h3>
            <div class='LOTRcard__text'>
              <div><b>Genres:</b> ${card.genres}</div>
              <div><b>Year:</b> ${card.year}</div>
            </div>
          </div>
          <div class='card-back'>
            <p>${card.about}</p>
          </div>
        </div>
      </div>`;
  }
  document.getElementById("LOTRcards_container").innerHTML = LOTRcardsContent;
});
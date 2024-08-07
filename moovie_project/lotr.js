const apiKey = 'B1lmuNCxfkD5kzGqi6_q';
const headers = {
  Authorization: `Bearer ${apiKey}`
};

const characterContainer = document.getElementById("character-container");
const button = document.getElementById("lotr__button");
const errorContainer = document.createElement("div");
errorContainer.style.color = "red";
characterContainer.parentNode.insertBefore(errorContainer, characterContainer.nextSibling);

const fetchAllCharacters = async () => {
try {
    const url = 'https://the-one-api.dev/v2/character';
    const response = await fetch(url, { headers });
    if (!response.ok) {
    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.docs;
} catch (error) {
    throw error;
}
};

button.addEventListener("click", () => {
errorContainer.textContent = "";
fetchAllCharacters()
.then(characters => {
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
    })
    .catch(error => {
    errorContainer.textContent = `Ошибка: ${error.message}`;
    });
});
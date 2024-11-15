let imageContainer = document.getElementById('imageContainer');

let nameContainer = document.getElementById('nameContainer');

let img = document.createElement('img');

let submitButton = document.querySelector("#submitButton")

let errorMessage = document.getElementById("errorMessage")

let submitContainer = document.getElementById('submitContainer')

imageContainer.appendChild(img);

async function getPoke() {
    let randomMath = getRandomInt(152);
    let response = await fetch("//pokeapi.co/api/v2/pokemon/" + randomMath + "/")
    let data = await response.json()
    console.log(data);
    nameContainer.textContent = (data.name);
    img.src = (data.sprites.front_default);
}

getPoke()


submitButton.addEventListener("click", () => {
    if (Answer()) {
        getPoke();
        errorMessage.innerHTML = "Bonne réponse !";
        setTimeout(function () {
            errorMessage.textContent = ""
        }, 3000)
    } else {
        errorMessage.innerHTML = "Réessayez !";
        setTimeout(function () {
            errorMessage.textContent = ""
        }, 3000)
    }

});

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

function Answer() {
    let userInput = submitContainer.value;
    let correctAnswer = nameContainer.textContent;
    if (userInput === correctAnswer) {
        return true;
    } else {
        return false;
    }
}
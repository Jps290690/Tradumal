const words = {
    en: { "gato": "cat", "perro": "dog", "casa": "house", "agua": "water" },
    pt: { "gato": "gato", "perro": "cachorro", "casa": "casa", "agua": "água" },
    fr: { "gato": "chat", "perro": "chien", "casa": "maison", "agua": "eau" },
    de: { "gato": "Katze", "perro": "Hund", "casa": "Haus", "agua": "Wasser" }
};

let currentWord = "";
let currentLang = "en";

function getRandomWord() {
    const keys = Object.keys(words[currentLang]);
    return keys[Math.floor(Math.random() * keys.length)];
}

function setWord() {
    currentWord = getRandomWord();
    document.getElementById("word").textContent = currentWord;
}

function checkAnswer() {
    const translation = document.getElementById("translation").value.trim().toLowerCase();
    const correctAnswer = words[currentLang][currentWord];
    
    if (translation === correctAnswer) {
        document.getElementById("result").textContent = "¡Correcto!";
    } else {
        document.getElementById("result").textContent = `Incorrecto. La respuesta correcta es: ${correctAnswer}`;
    }
}

function nextWord() {
    setWord();
    document.getElementById("translation").value = "";
    document.getElementById("result").textContent = "";
}

document.getElementById("language").addEventListener("change", (event) => {
    currentLang = event.target.value;
    nextWord();
});

window.onload = () => {
    setWord();
};

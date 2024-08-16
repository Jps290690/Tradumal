const words = [
    "gato", "perro", "casa", "agua", "sol", "luna", "arbol", "ciudad", "viento", "estrella", 
    "mar", "montaña", "camino", "puerta", "ventana", "raton", "libro", "pelota", "zapato", 
    "sombrero", "pelicula", "reloj", "telefono", "cuchara", "tenedor", "plato", "taza", "silla", 
    "mesa", "puente", "nube", "cielo", "lago", "rio", "playa", "bosque", "jardin", "animal", 
    "fuego", "agua", "nieve", "lluvia", "tren", "avion", "barco", "bicicleta", "carro", 
    "camion", "puerta", "ventana", "pared", "techo", "piso", "espejo", "cuadro", "pintura", 
    "lampara", "cama", "almohada", "sabana", "escritorio", "computadora", "teclado", "raton", 
    "monitor", "libro", "cuaderno", "boligrafo", "lapiz", "borrador", "pegamento", "tijeras", 
    "carpeta", "mochila", "zapato", "calcetin", "chaqueta", "camisa", "pantalon", "falda", 
    "vestido", "abrigo", "sombrero", "guantes", "bufanda", "camiseta", "sueter", "pijama", 
    "sandalia", "botin", "chaqueta", "abrigo", "chaqueta", "pulsera", "anillo", "collar", 
    "pendiente", "reloj", "esmalte", "perfume", "crema", "jabon", "shampoo", "cepillo", 
    "dentifrico", "toalla", "albornoz", "peine", "cepillo", "maquillaje", "pasta", "cepillo", 
    "medicina", "vitaminas", "pastillas", "cura", "terapia", "hospital", "clinica", "farmacia", 
    "dental", "receta", "inmunizacion", "vacuna", "hospital", "sala", "cama", "silla", 
    "mesa", "control", "equipo", "aparato", "instrumento", "herramienta", "maquina", "motor", 
    "vehiculo", "automovil", "bicicleta", "moto", "camion", "camioneta", "bus", "barco", 
    "avion", "tren", "subterraneo", "teleferico", "trolebus", "patinete", "skate", "patin", 
    "camara", "video", "fotografia", "imagen", "grabadora", "microfono", "auriculares", 
    "altavoces", "audifonos", "radio", "televisor", "pantalla", "proyector", "dron", "lampara", 
    "bombilla", "foco", "linterna", "antorcha", "vela", "candelabro", "plato", "cuchillo", 
    "tenedor", "cuchara", "taza", "vaso", "botella", "jarra", "sarten", "olla", "cacerola", 
    "batidora", "microondas", "nevera", "horno", "estufa", "cafetera", "refrigerador", 
    "horno", "sarten", "olla", "cacerola", "batidora", "picadora", "tostadora", "hornillo", 
    "plancha", "aspiradora", "lavadora", "secadora", "lavavajillas", "plancha", "peladora", 
    "rallador", "sarten", "cuchara", "cuenco", "tenedor", "plato", "vaso", "taza", "jarra", 
    "botella", "lata", "tarrina", "caja", "envoltorio", "paquete", "bolsa", "saco", 
    "carro", "carretilla", "carreton", "andador", "patineta", "juguete", "peluche", "muñeca", 
    "robot", "lego", "rompecabezas", "puzzle", "juego", "cubo", "cometa", "paracaidas", 
    "baston", "caminador", "piramide", "trompeta", "piano", "guitarra", "bajo", "bateria", 
    "violin", "arpa", "flauta", "clavicordio", "saxo", "clarinete", "trombon", "corneta", 
    "arpa", "armonica", "sitar", "ukelele", "mandolina", "acordeon", "lira", "bandoneon"
];

const languages = [
    "INGLES", "PORTUGUES", "FRANCES", "ALEMAN"
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function setWordAndLanguage() {
    const word = getRandomElement(words);
    const language = getRandomElement(languages);
    
    document.getElementById("word").textContent = word.toUpperCase();
    document.getElementById("language").textContent = language;
}

function nextWord() {
    setWordAndLanguage();
}

window.onload = () => {
    setWordAndLanguage();
};

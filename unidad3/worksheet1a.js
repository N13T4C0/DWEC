// ejercicio 1
/**
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */
function isOdd(x){
    if(x%2==0){
        return "el num "+x+" es par";
    }else return "el num "+x+" no es par";
}
console.log(isOdd(1));

/**
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */
function inRange(x,min,max){
            let encontrado = false;
    for(let i=min;i<=max;i++){
        if(i==x){
            encontrado=true;
        }
    }
    return encontrado;
}
console.log(inRange(1,4,8));
/**
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */
function getBiggestNumber(numbers) {
    let partio = numbers.split(",");
    let array = [];

    for (let i = 0; i < partio.length; i++) {
        array.push(Number(partio[i]));
    }

    return Math.max(...array);
}
console.log(getBiggestNumber("2,3,4,5,6,9,4"));
/**
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */
function getPercentage(number,percentage){
    return (number*percentage)/100;
}
console.log(getPercentage(200,10));
/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */
function getRandomColorSequence(colors,number){
    arra = colors.split(",");
    arravacio = [];
    for(let i=0;i<=number;i++){
            alea = Math.floor(Math.random()*arra.length);
        arravacio.push(arra[alea]);
    }
    return arravacio;
}
console.log(getRandomColorSequence("red,blue,green",4));
/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */
function getRockPaperScissor(){
    piedrita = ["rock","paper","scissor"];
        alea = Math.floor(Math.random()*piedrita.length);

    return piedrita[alea];
}
console.log(getRockPaperScissor());
/**
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */
function filterNumbersGreaterThan(numbers, filter) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < filter) {
            result.push(numbers[i]);
        }
    }
    return result;
}
console.log(filterNumbersGreaterThan([1,2,3,4],3));
/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */
function getFactorial(x) {
    let result = 1;
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    return result;
}
console.log(getFactorial(4));
/**
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */
function areArraysEqual(a, b) {
    let iguales = true;
    if (a.length !== b.length)
        iguales=false; 
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) 
            iguales =false;
    }
        return iguales;
}
console.log(areArraysEqual([1, 4], [1, 4]));
/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */
function toHackerSpeak(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i].toLowerCase();
        if (char == "a") result += "4";
        else if (char == "e") result += "3";
        else if (char == "i") result += "1";
        else if (char == "o") result += "0";
        else if (char == "s") result += "5";
        else result += text[i];
    }
    return result;
}
console.log(toHackerSpeak("I'm a hacker now"));
/**
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */
function getFileExtension(file) {
    let separao = file.split(".");
    return separao.length > 1 ? separao[separao.length - 1] : "no has puesto extenn";
}
console.log(getFileExtension("imagen.mp4"));
/**
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */
function flatArray(arr) {
    const resultao = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resultao.push(arr[i][j]);
        }
    }
    return resultao;
} // tmb se puede hacer con el metodo flat, o cn spread los 3 puntos ... 
console.log(flatArray([[1, 5, 4], [3, 10], [2, 5]]) );
/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(removeDuplicates([4, 5, 10, 4, 10, 2]));   
/**
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

function countLetter(letter,text){
    let contado = 0;
    for(let i=0;i<=text.length;i++){
        if(text[i]==letter){
            contado++;
        }
    }
    return contado;
}
console.log(countLetter("a", "javascript"));
/**
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano 
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 * 
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */
function canPlay(hand,face){
    arraPasaoFa = face.split(" ");
    arraPasao = hand.split(" ");
    let iguales = false;
    for(let i=0;i<=arraPasaoFa.length;i++){
        if(arraPasaoFa[i] == arraPasao[i] ){
            iguales=true;
        }
    }
    return iguales;
}
console.log(canPlay(("yellow 3 red 8"), "green 3"));
/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */
function removeWords(str, words) {
    const strArray = str.split(" ");
    const vacio = [];

    for (let i = 0; i < strArray.length; i++) {
        if (!words.includes(strArray[i])) {
            vacio.push(strArray[i]);
        }
    }

    return vacio;
}

console.log(removeWords("This is a really bad test", ["really", "bad"]));


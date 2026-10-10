// PARTE 1 - OPERACIONES

// a)suma
console.log("Suma: " + (5 + 3));

// b)resta literales
console.log("Resta: " + (5 - 3));

// c)multiplicación literales
console.log("Multiplicación: " + (5 * 3));

// d)división literales
console.log("División: " + (5 / 3));

//e)Resto de la división
console.log("Resto de la división: " + (5 % 3));

//f)imprime mi nombre
console.log("Mi nombre es: " + "Katherina");

//g)concatenacion de dos palabras literales
console.log("Concatenación: " + "Programacion" + " " + "Web");

//h)concatenacion de tres palabras literales
console.log("Concatenacion: "+ "Aplicaciones" + " " + "Web" + " " + "1");


//PARTE2 - OPERACIONES CON VARIABLES Y CONSTANTES

//a)constante con el valor string del nombre de la materia, e imprima por consola la variable concatenada con la cadena literal 
const nombreMateria = "Aplicaciones Web 1";
console.log("Nombre de la materia: " + nombreMateria + " - Sistemas");

//b)variable de cadena vacía con el identificador parentesco.
//Declare dos constantes, una con el nombre suyo, y otra con el nombre de un familiar. 
const miNombre = "Katherina";
const nombreFamiliar = "Nayla";
let parentesco = "";
// Concatene ambos nombres intercalando el parentesco entre ambos: “hermano de” o “prima de” y asígnelos a la primera variable parentesco que fue declarada vacía.
parentesco = miNombre + " es " + "hermana de" + " " + nombreFamiliar;
// Imprima la variable parentesco por consola.
console.log("Parentesco: " + parentesco);
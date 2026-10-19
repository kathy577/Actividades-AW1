//Estructuras Condicionales
 //a)
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad.");
}else {
    console.log("Eres menor de edad.");
}

//b)
let numero = 5;
if (numero % 2 === 0) {
    console.log("El número es par.");
}else{
    console.log("El número es impar.");

}
//c)
let calificacion = 7;
if (calificacion < 4) {
    console.log("Desaprobado");
}else if (calificacion >= 4 && calificacion < 7) {
    console.log("Aprobado");
}else if (calificacion >= 7) {
    console.log("Excelente");
}

//Estructuras Bucles

//a)Numeros del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//b)Numeros del 10 al 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//c)Bucle de 20 iteraciones con template literals 
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número es par.`);
    } else {
        console.log(`El número es impar.`);
    }

//d)Bucle de 20 iteraciones con template literals "El número i3 es impar"
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par.`);
    } else {
        console.log(`El número ${i} es impar.`);
    }

//Funciones de declaracion
// a) sin retorno de valor 
function saludar() {
    console.log("¡Hola, bienvenido!");
}


saludar();


//b)Sin retorno de valor con parametros
function saludarPersona(nombre) {
    console.log(`¡Hola ${nombre}, bienvenido!`);
}


saludarPersona("Andrés");

//c) Con retorno de valor
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}
const resultadoMayoria = esMayorDeEdad(20);
console.log(`¿Es mayor de edad? ${resultadoMayoria}`);


//funciones de flecha 
//a)Realice el mismo programa que el punto 1. c, pero convierta la función a una función flecha.
const esMayorDeEdadFlecha = (edad) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
};
const resultadoMayoriaFlecha = esMayorDeEdadFlecha(20);
console.log(`¿Es mayor de edad? ${resultadoMayoriaFlecha}`);

//b)
const compararNumeros = (num1, num2) => {
    if (num1 < num2) {
        console.log(`El número ${num1} es menor que ${num2}`);
    } else if (num1 === num2) {
        console.log(`El número ${num1} es igual que ${num2}`);
    } else {
        console.log(`El número ${num1} es mayor que ${num2}`);
    }
};

for (let i = 1; i <= 5; i++) {
    compararNumeros(i, 3);
}

//Funciones callback
//a)
const operacionA = (num1, num2, callback) => {
    callback(num1, num2);
};

const sumaA = (num1, num2) => {
    console.log(`El resultado de la suma es ${num1 + num2}`);
};

const restaA = (num1, num2) => {
    console.log(`El resultado de la resta es ${num1 - num2}`);
};

operacionA(5, 3, sumaA);
operacionA(5, 3, restaA);

//b)

const operacionB = (num1, num2, callback) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        console.log("Debe ingresar solo números.");
        return;
    }
    callback(num1, num2);
};

const sumaB = (num1, num2) => {
    console.log(`El resultado de la suma es ${num1 + num2}`);
}

const restaB = (num1, num2) => {
    console.log(`El resultado de la resta es ${num1 - num2}`);
};

operacionB(5, 3, sumaB);
operacionB(5, 3, restaB);


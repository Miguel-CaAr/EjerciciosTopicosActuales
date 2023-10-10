//EJERCICIO 1

const n = [1, 2, 33, 12, 5];
const array = n.filter((n) => n >= 5);
array.forEach((n) => console.log(n))

//EJERCICIO 2

const frutas = ['naranja', 'platano', 'manzana', 'fresa', 'kiwi'];
const arregloSlice = frutas.slice(2, 4);
console.log("Arreglo: " + JSON.stringify(arregloSlice))

//EJERCICO 3

const arreglo3 = [10, 5, 10];
arreglo3.map((elemento, index)=>{
    console.log((elemento+10) + `:${index}`)
})

//EJERCICIO 4

const letras1 = ['H', 'I', 'J'];
const letras2 = ['K', 'L', 'M'];
letrasOrdenadas = letras1.concat(letras2);
console.log(letrasOrdenadas);

//EJERCICIO 5

const paises = ["Mexico", "USA", "Francia"];
console.log(paises.includes("Francia"));
/* ALCANCE DE TIPOS DE VARIABLES */
var variable = 0; //Alcance local, el valor puede cambiar
const constante = "Constante"; //NO puede cambiar el valor; Contraseña, APIKEY, e-mail
let let_var = 1; //Solo funciona en el bloque en el que se declara. IF, FOR, WHILE

for(let i=0; i<5; i++){
    //console.log(i);
}
//console.log(i); no imprime pq esta fuera de alcance

for(var j=0; j<5; j++){
    //console.log(j);
}
//console.log(j);



/* FUNCIONES FLECHA */
function sumatoria(parametro1, parametro2){
    return parametro1+parametro2;
}

var sum = sumatoria(1, 2);
console.log(sum);

var sumatoriaFlecha = (parametro1, parametro2) => parametro1+parametro2; //No es necesario poner return 
//Declaramos como variable sin embargo sigue siendo una función

var sumF = sumatoriaFlecha(2, 3);
console.log(sumF);

function helloWorld(nombre){
    console.log("Hello World "+nombre);
}

helloWorld("Elena");

var helloWorldF = nombre => console.log("Hello World F "+nombre);

helloWorldF("Juana");

/**
 * response => response.json()
 * 
 * function x(response) {
 *  return response.json()
 * }
 * 
 */




/** FUNCIONES DE ARRAYS  **/
var nums = [3, 2, 4, 6, 7];
for(var i=0; i<nums.length; i++){
    //console.log(nums[i]);
}
//Siempre que tengamos un forEach este va a mandar el valor, la posición y el arreglo
nums.forEach(function (num, posicion, arreglo){ //Función anónima. 
    console.log("Posición:"+posicion+" , Valor:"+num+", Arreglo:"+arreglo);
})

// function imprime(num, posicion, arreglo){
//     console.log(num);
// }
// nums.forEach(imprime);




/* WHILE cuando quieres manipular más los datos de condicional */
var inicio = 0;
var final = 10;
while(inicio < final){
    console.log("Inicio:"+inicio+" Final:"+final);
    
    if(inicio%2 == 0) { //Si es múltiple de 2
        inicio++; //sumar 1
    }else {
        inicio += 2; //si no, sumar 2
    }
    
    //final--; restar 1 a var final
}


//variables

var a; //declarando la variable a
var b = 'b'; //declarando y asignando
b = 'bb'; //reasignando la variable
var a = 'aa'; ///redeclaración de la variable

//GLOBAL SCOPE

var fruit = 'apple'; //global, puede llamarlo afuera o adentro de cualquier lado
console.log(fruit);
function bestFruit(){
    console.log(fruit);
}
bestFruit();


function countries(){
    country = 'PE'; //global, por que no se le puso VAR
    console.log(country);
}

countries();
console.log(country);


//FUNCTION SCOPE--- solo puede ser accedida dentro de esa función
function greeting(){
    let userName = 'Ana'; //Alcance solo dentro de la función
    console.log(userName);

    if(userName === 'Ana'){
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName); //No se puede acceder a esa variable


//BLOCK SCOPE -- solo se accede a las variables dentro de su bloque
function frutas(){
    if(true){
        var fruta1 = 'manzana'; //--FUNCTION SCOPE
        let fruta2 = 'pera'; //-BLOCK SCOPE- alcance dentro del bloque
        const fruta3 = 'platano'; //-BLOCK SCOPE- alcance dentro del bloque
        console.log(fruta2);
        console.log(fruta3);
    }
    console.log(fruta1);
}
frutas();


//REASIGNACIÓN Y REDECLARACIÓN - VAR
var firstName; //tiene valor UNDEFINED
firstName = 'Nicole';//Asignar un valor
console.log(firstName);//Mostramos el valor

var lastName = 'Estefanny'; //declarando y Asigando
lastName = 'Nicole'; //Volver a asignar un valor
console.log(lastName);

var secondName = 'Zoila'; //Asigando y declarando
var secondName = 'Nicole'; // reasignación y redeclaración
console.log(secondName);

//REASIGNACIÓN Y REDECLARACIÓN - LET- No se peude redeclarar
let home = 'door'; //declarando y Asigando
home = 'bed'; // reasignación
console.log(home);
let home = 'floor';// Redeclaración
console.log(home);

//REASIGNACIÓN Y REDECLARACIÓN - CONST -- no se puede reasignar ni redeclarar
const animal = 'dog'; //declarando y Asigando
//animal = 'cat'; // reasignando
const animal = 'bird'; // Redeclaración
console.log(animal); 


//VALORES A LA REFERENCIA - si se puede reasignar y Redeclarar
const vehicles = [];
vehicles.push("rojo");//agregar elementos
console.log(vehicles);
vehicles.pop();//quitar elementos
console.log(vehicles);


//Strict Mode
'use strict'; //activar el USO ESTRICTO, primero se debe declarar la varibale
pi = '3.1416';
console.log(pi);

function myFunction(){
    //'use strict';
   return pi = '3.1416';
    //console.log(pi);
}
console.log(myFunction());







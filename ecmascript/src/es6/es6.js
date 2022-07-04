

//Parametro por defectos
function newFunction(name, age, country){
    var name = name || 'oscaar';
    var age = age || 32;
    var country = country || "Perú";
    console.log(name,age,country);
}
// ecmaScript 6 Parametro por defectos
function newFunction2(name = 'oscar', age = 32, country = "Perú"){
    console.log(name, age, country);
};
newFunction();
newFunction2('Nicole',23,'PE');


//UNIR VARIOS ELEMENTOS
let hello = "Holaa";
let world = "Mundo";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//ecmaScript 6 Unión de elementos
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//multi línea en los strings
let lorem = "Holis como están en esta mañana \n"
+ "otra frase epica que necesitamos."
//ecmaScript 6 multi línea en los strings
let lorem2 = `otra frase epica 2
ahora seguimos entre línea`;
console.log(lorem);
console.log(lorem2);


//destructuración de elementos
let person = {
    'name': 'Nicole',
    'age': 23,
    'country': 'pe'
}
console.log(person.name, person.age);
//ecmaScript 6 de elementos
let {name, country} = person;
console.log('2' + name,country);


//PROPAGACIÓN(...) Elementos de arreglos
let team1 = ['nicole', 'julian', 'ricardo']
let team2 = ['Jerson', 'Nolu', 'Camila']
//es6 uniendo Elementos de arreglos
let education = ['David', ...team1, ...team2];
console.log(education);

//let solo está disponible en  el scope y no afuera
{
    var globalvar = "Global var";
}

{
    let globalLet = 'global let';
    console.log(globalLet);
}
console.log(globalvar);
//console.log(globalLet);


//es6 CONST.. garantizar que el valor no se mueva 
const a = 'b';
a = 'a';
console.log(a);


//propieda de objetos
let name = 'nicole';
let age = 23;
//es5
obj = { name: name, age: age};
//es6 propieda de objetos
obj2 = {name, age};
console.log(obj);
console.log(obj2);


//Funciones tipo flecha
const names = [
    {name:'nicole', age: 23},
    {name: 'etsefanny', age: 20}
]
let listOfNames = names.map(function(item){
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(
    item => console.log(item.name));    

const listOfNames3 = (name, age) =>{
    //codigo
}

const listOfNames4 = name => {
    //.....
}

const square = num => num * num; //hacer opraciones sin return

//PROMESAS.. call back - llamar a un API
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            resolve('Hey tudo bem');
        }else{
            reject('upsss');
        }
    });
}

helloPromise()
.then(response => console.log(response))
.then(() => console.log('hola'))
.catch(error => console.log(error));


//es6 CLASES Y HERENCIAS
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}
const cal = new calculator();
console.log(cal.sum(2,2));


//Importar y exportar variables en diferentes módulos
import {hello} from './module';
hello();


//(Generator con *) para poder ejecutar cada elementos 
function* helloWorld(){
    if(true){
        yield 'holiwiss ';
    }
    if(true){
        yield 'mundooooo';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

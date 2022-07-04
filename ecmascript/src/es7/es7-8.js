//es7 - Condicional con es7 usando INCLUDES
let number =  [1,2,3,7,8];
if(number.includes(9)){
    console.log('si hay 7');
}else{
    console.log('no hay');
}


//es7 ELEVAR A LA POTENCIA(**)
let base = 4;
let exponent = 4;
let result = base ** exponent;

console.log(result);

//------2017--------------------------------------------------------------
//ES8 - Object.entries - Devuelve los valores en una matriz
const data = {
    frontend: 'nico',
    backend: 'norma',
    design: 'jerson'
}
const entries = Object.entries(data);
console.log(entries);
//ES8 cuantos elementos tiene un objeto
console.log(entries.length);


//ES8 - Object.values - se vuele en un arreglo
const data2 = {
    frontend: 'nico',
    backend: 'norma',
    design: 'jerson',
}

const values = Object.values(data2);
console.log(values);
console.log(values.length);


//ES8  - PADDING- añadir valores
const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'*********'));
console.log('otro'.padEnd(12,'*********'));

//ES8 Async Await 
const helloWorld = () => {
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'));
    })
};

const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

//Manera correcta con el try-catch 
const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch (error){
        console.log(error);
    }
}

anotherFunction();

//------2018---------------------------------------------------------------
//es9 - operador de reposo ALL
const obj0 = {
    nombre: 'Andres',
    age: 23,
    country: 'peru'
  };
let {country, ...all } = obj0;
console.log(all);


//es9 - propagación unir varios elementos de objetos a objetos
const obj = {
    name: 'nicole',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'pe'
}
console.log(obj1);


//es9 - promise . finally
const helloWorld2 = () => {
    return new Promise((resolve, reject) =>{
        (true)
        //? resolve('holis mundo')
        ? setTimeout(() => resolve('holis mundo'), 3000)
        :reject(new Error('Test Error'))
    });
};

helloWorld2()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finalizo'))


// es9 - acceder a regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year,month,day);

//-----2019----------------------------------------------------------------
//es10 - HACIENDO UNA MATRIZ desde el array
let array1 = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array1.flat(2));

let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]));


//es10 - trimStart ... eliminar espacio en blanco en un STRING
let hello = '            hello mundo';
console.log(hello);
console.log(hello.trimStart());

let hello2 = 'hello mundo              ';
console.log(hello2);
console.log(hello2.trimEnd());


//es10 - catch.. ya no es necesario iniciar la variable ERROR 
try{

}catch{
    error
}


//es10 - Object.fromEntries.. transformar arrreglos a objetos
let entries1 = [["name", "oscar"], ["age",23]];
console.log(Object.fromEntries(entries1));


//es10- objeto tipo simbolo 
let mySymbl = 'My simbolo';
let symbol = Symbol(mySymbl);
console.log(symbol.description);

//-----2020--------------------------------------------------------------
//es11 -  Dinamic Import.. utilizar  la función cuando sea necesario
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    //module.hello();
    module.pruebaboton();
});


//es11 - BigInt
const abigNumber = 9007199254740991n; //posición más alta

const anotherBigNumber = BigInt(9007199254740991);
console.log(abigNumber);
console.log(anotherBigNumber);


//es11 - Promise.allSettled
const promiseOne = new Promise((resolve,reject) => reject("reject"));
const promiseTwo = new Promise((resolve,reject) => resolve("resolve"));
const promiseThree = new Promise((resolve,reject) => resolve("resolve 1"));

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
.then(response => console.log(response));


//es11 - globalThis
console.log(window);
console.log(globalThis); 


//es11 - NULL
const fooo = null ?? 'default string';
console.log(fooo);


//es11 - Optional Cheni
const user = {};
console.log(user?.profile?.email);
if(user ?.profile?.email){
    console.log('email')
}else{
    console.log('fail');
}

//-----ES12 - 2021----------------------------------------------------------------------
//REPLACE ALL
const string = "Java script es complicado pero Java script es muy dinámico e innovador";
const replacedString = string.replace("Java script", "Python");
console.log(replacedString);
//es12 - replaceAll
const replacedString2 = string.replaceAll("Java script", "Python");
console.log(replacedString2);


//es11 - Métodos privados
class Message{
    #show(val){
        console.log(val);
    };
    get #add(val){
        //....
    }
}

const message = new Message();
message.show('hola!');


//es11- ANY .. solo retorna el primer valor de RESOLVE
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));
Promise.any([promise1,promise2,promise3])
.then(response => console.log(response));


//es11 - WeakRef
class AnyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

//es11 - SIGNOS
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);













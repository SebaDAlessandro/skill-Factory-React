// /*Para ver los resultados debes tener instalado la extension Live Server y ejecutar la misma al 
// archivo index de esta carpeta.
// Luego deberás abrir la consola integrada del navegador (ctrl + shift + i)*/


// //Creá una variable que contenga tu nombre
// let username = 'Sebastian'

// console.log('username: ',username)
// console.log('')

// //Creá una variable que contenga tu edad
// let age = 40

// console.log('age: ',age)
// console.log('')

// //Creá una variable que indique si estás en pareja (T/F)
// let isSingle = false

// console.log('isSingle: ',isSingle)
// console.log('')

// //Creá una variable que contenga un array con los números del 1 al 10
// const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log('arrayNumber: ',arrayNumber)
// console.log('')

// //Creá una variable que contenga un array con los nombres de 5 skillers
// const arraySkillersNames = ['Nico', 'Georgina', 'Mati', 'Paloma', 'Franco']

// console.log('arraySkillersNames: ',arraySkillersNames)
// console.log('')

// //Creá un objeto que contenga el valor de todas las variables anteriores (sin llamar a esas variables, es decir, handle-made)
// const objetAll = {
//     username,
//     age,
//     isSingle,
//     arrayNumber,
//     arraySkillersNames
// }

// console.log('objetAll: ',objetAll)
// console.log('')


// /*----------------------------------------------------------------------------------------*/
// /*El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la 
// longitud del array.*/

// arraySkillersNames.pop()
// console.log('arraySkillersNames pop: ',arraySkillersNames)
// console.log('')

// /*El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la 
// longitud del array.*/

// arraySkillersNames.shift()
// console.log('arraySkillersNames shift: ',arraySkillersNames)
// console.log('')

// /*El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del 
// array.*/

// arraySkillersNames.push('Abril')
// console.log('arraySkillersNames push: ',arraySkillersNames)
// console.log('')

// /*El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por
// inicio hasta fin (fin no incluido). El array original no se modificará.*/

// const arraySlice = arraySkillersNames.slice() //copia del array
// console.log('arraySlice slice: ',arraySlice)
// console.log('')

// /*El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud 
// del array.*/

// arraySkillersNames.unshift('Batman', 'Robin')
// console.log('arraySkillersNames unshift: ',arraySkillersNames)
// console.log('')

// /*El método reverse() invierte el orden de los elementos de un array in place. El primer elemento 
// pasa a ser el último y el último pasa a ser el primero.*/

// arraySkillersNames.reverse()
// console.log('arraySkillersNames reverse: ',arraySkillersNames)
// console.log('')

// /*El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una 
// cadena y devuelve esta cadena.*/

// const arrayJoin = arraySkillersNames.join()//copia del array original
// console.log('arrayJoin join: ',arrayJoin)
// console.log('')

// /*El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existente, 
// sino que devuelve un nuevo array.*/

// const arrayOtherSkillers = ['Firulay', 'Puppy']

// const arrayConcat = arraySkillersNames.concat(arrayOtherSkillers)//copia del array original
// console.log('arrayConcat concat: ',arrayConcat)
// console.log('')

// /*La propiedad length de un objeto String representa la longitud de una cadena*/

// console.log('arraySkillersNames length: ',arraySkillersNames.length)
// console.log('')

// /*El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo
// ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a 
// la posición del valor del string de acuerdo a su valor Unicode*/

// arraySkillersNames.sort()
// console.log('arraySkillersNames reverse: ',arraySkillersNames)
// console.log('')

const data = [
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
    {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
    "street": "Victor Plains",
    "suite": "Suite 879",
    "city": "Wisokyburgh",
    "zipcode": "90566-7771",
    "geo": {
    "lat": "-43.9509",
    "lng": "-34.4618"
    }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
    "name": "Deckow-Crist",
    "catchPhrase": "Proactive didactic contingency",
    "bs": "synergize scalable supply-chains"
    }
    },
    {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
    "lat": "-68.6102",
    "lng": "-47.0653"
    }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "bs": "e-enable strategic applications"
    }
    },
    {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
    "street": "Hoeger Mall",
    "suite": "Apt. 692",
    "city": "South Elvis",
    "zipcode": "53919-4257",
    "geo": {
    "lat": "29.4572",
    "lng": "-164.2990"
    }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
    "name": "Robel-Corkery",
    "catchPhrase": "Multi-tiered zero tolerance productivity",
    "bs": "transition cutting-edge web services"
    }
    },
    {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
    "street": "Skiles Walks",
    "suite": "Suite 351",
    "city": "Roscoeview",
    "zipcode": "33263",
    "geo": {
    "lat": "-31.8129",
    "lng": "62.5342"
    }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
    "name": "Keebler LLC",
    "catchPhrase": "User-centric fault-tolerant solution",
    "bs": "revolutionize end-to-end systems"
    }
    },
    {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
    "street": "Norberto Crossing",
    "suite": "Apt. 950",
    "city": "South Christy",
    "zipcode": "23505-1337",
    "geo": {
    "lat": "-71.4197",
    "lng": "71.7478"
    }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
    "name": "Considine-Lockman",
    "catchPhrase": "Synchronised bottom-line interface",
    "bs": "e-enable innovative applications"
    }
    },
    {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
    "street": "Rex Trail",
    "suite": "Suite 280",
    "city": "Howemouth",
    "zipcode": "58804-1099",
    "geo": {
    "lat": "24.8918",
    "lng": "21.8984"
    }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
    "name": "Johns Group",
    "catchPhrase": "Configurable multimedia task-force",
    "bs": "generate enterprise e-tailers"
    }
    },
    {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
    "street": "Ellsworth Summit",
    "suite": "Suite 729",
    "city": "Aliyaview",
    "zipcode": "45169",
    "geo": {
    "lat": "-14.3990",
    "lng": "-120.7677"
    }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
    "name": "Abernathy Group",
    "catchPhrase": "Implemented secondary concept",
    "bs": "e-enable extensible e-tailers"
    }
    },
    {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
    "street": "Dayna Park",
    "suite": "Suite 449",
    "city": "Bartholomebury",
    "zipcode": "76495-3109",
    "geo": {
    "lat": "24.6463",
    "lng": "-168.8889"
    }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
    "name": "Yost and Sons",
    "catchPhrase": "Switchable contextually-based project",
    "bs": "aggregate real-time technologies"
    }
    },
    {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
    "street": "Kattie Turnpike",
    "suite": "Suite 198",
    "city": "Lebsackbury",
    "zipcode": "31428-2261",
    "geo": {
    "lat": "-38.2386",
    "lng": "57.2232"
    }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
    "name": "Hoeger LLC",
    "catchPhrase": "Centralized empowering task-force",
    "bs": "target end-to-end models"
    }
   }
]

//Crear un programa que pida dos números a través de un prompt, que los compare y que me indique cuál es mayor y si es un tipo de datos no válido, que lo indique por console/alert

let primerNumStrg = prompt('Ingrese un número')
let segundoNumStrg = prompt('Ingrese otro número')

let primerNum = parseFloat(primerNumStrg)
let segundoNum = parseFloat(segundoNumStrg)

if(Number.isNaN(primerNum)|| Number.isNaN(segundoNum)){
    alert('Ingrese números solamente')
}else{
    if(primerNum<segundoNum){
        alert(`El segundo numero ingresado, ${segundoNum} es mayor`)
    }else if (segundoNum<primerNum){
        alert(`El perimer numero ingresado, ${primerNum} es mayor`)
    }else{
        alert(`Ha cargado el mismo numero = ${primerNum}`)
    }
}
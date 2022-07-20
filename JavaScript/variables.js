/*Para ver los resultados debes tener instalado la extension Live Server y ejecutar la misma al 
archivo index de esta carpeta.
Luego deberás abrir la consola integrada del navegador (ctrl + shift + i)*/


//Creá una variable que contenga tu nombre
let username = 'Sebastian'

console.log('username: ',username)
console.log('')

//Creá una variable que contenga tu edad
let age = 40

console.log('age: ',age)
console.log('')

//Creá una variable que indique si estás en pareja (T/F)
let isSingle = false

console.log('isSingle: ',isSingle)
console.log('')

//Creá una variable que contenga un array con los números del 1 al 10
const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('arrayNumber: ',arrayNumber)
console.log('')

//Creá una variable que contenga un array con los nombres de 5 skillers
const arraySkillersNames = ['Nico', 'Georgina', 'Mati', 'Paloma', 'Franco']

console.log('arraySkillersNames: ',arraySkillersNames)
console.log('')

//Creá un objeto que contenga el valor de todas las variables anteriores (sin llamar a esas variables, es decir, handle-made)
const objetAll = {
    username,
    age,
    isSingle,
    arrayNumber,
    arraySkillersNames
}

console.log('objetAll: ',objetAll)
console.log('')

/*El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la 
longitud del array.*/

arraySkillersNames.pop()
console.log('arraySkillersNames pop: ',arraySkillersNames)
console.log('')

/*El método shift() elimina el primer elemento del array y lo retorna. Este método modifica la 
longitud del array.*/

arraySkillersNames.shift()
console.log('arraySkillersNames shift: ',arraySkillersNames)
console.log('')

/*El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del 
array.*/

arraySkillersNames.push('Abril')
console.log('arraySkillersNames push: ',arraySkillersNames)
console.log('')

/*El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por
inicio hasta fin (fin no incluido). El array original no se modificará.*/

const arraySlice = arraySkillersNames.slice() //copia del array
console.log('arraySlice slice: ',arraySlice)
console.log('')

/*El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud 
del array.*/

arraySkillersNames.unshift('Batman', 'Robin')
console.log('arraySkillersNames unshift: ',arraySkillersNames)
console.log('')

/*El método reverse() invierte el orden de los elementos de un array in place. El primer elemento 
pasa a ser el último y el último pasa a ser el primero.*/

arraySkillersNames.reverse()
console.log('arraySkillersNames reverse: ',arraySkillersNames)
console.log('')

/*El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una 
cadena y devuelve esta cadena.*/

const arrayJoin = arraySkillersNames.join()//copia del array original
console.log('arrayJoin join: ',arrayJoin)
console.log('')

/*El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existente, 
sino que devuelve un nuevo array.*/

const arrayOtherSkillers = ['Firulay', 'Puppy']

const arrayConcat = arraySkillersNames.concat(arrayOtherSkillers)//copia del array original
console.log('arrayConcat concat: ',arrayConcat)
console.log('')

/*La propiedad length de un objeto String representa la longitud de una cadena*/

console.log('arraySkillersNames length: ',arraySkillersNames.length)
console.log('')

/*El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo
ordenado. La ordenación no es necesariamente estable. El modo de ordenación por defecto responde a 
la posición del valor del string de acuerdo a su valor Unicode*/

arraySkillersNames.sort()
console.log('arraySkillersNames reverse: ',arraySkillersNames)
console.log('')
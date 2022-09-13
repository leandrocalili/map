// map()
 const numeros = [1,2,3,4 ]
function dobroNumero (num) {
return num * 2 
    
}
const dobroNumero = numeros.map(dobroNumero)
console.log(dobroNumero)

// EX ; Usar o map quando for preciso traduzir ]
// ou mapiar todos os elementos de um array para outro conjunto de valores.

// includes() 
    const  str = ['Ser, ou não ser, eis a questão.']

console.log(str.includes('Ser'));         // true
console.log(str.includes('questão'));     // true
console.log(str.includes('não existe'));  // false
console.log(str.includes('ser', 1));      // true
console.log(str.includes('SER'));         // false
// determina se um array contem um determinado elemento, retornando true ou false apropriadamente.


// reverse()
const meuArray = ['eu', 'tu', 'nos'];
meuArray.reverse();

console.log(meuArray) // ['nos', 'tu', 'eu']
// O propio nome diz ela faz o reversso , o primeiro sera o ultimo e ultimo sera o primeiro
// TESTE



// leo los 4 archivos a memoria

// preparo los 4 arrays a partir de los archivo leidos

// combino los primeros dos arrays

// combino los cuatro arrays



function transformarStringEnArrayDeNumeros(str, separador) {

    return str.split(separador)
}

function transformarArrayDeNumerosAUnSoloString(arr, separador) {
    return arr.join(separador)
}

function combinarDosArrays(arrA, arrB) {
    let combinado = arrA.concat(arrB)
    return combinado.sort((a, b)=>{return a-b})
}

const arrayPrueba1 = [3,4,5,8,2,4,23,10]
const arrayPrueba2 = [11, 6, 7, 9, 20]
const separa = ',' 
const stringPrueba1 = "1,2,3,5,6,10"

console.log(combinarDosArrays(arrayPrueba1, arrayPrueba2))

console.log("--------------------------------------------")

console.log(transformarArrayDeNumerosAUnSoloString(arrayPrueba1, separa))
let prueb1 = transformarArrayDeNumerosAUnSoloString(arrayPrueba1, separa)
console.log("--------------------------------------------")
console.log(transformarArrayDeNumerosAUnSoloString(arrayPrueba2, separa))
console.log("--------------------------------------------")
console.log(transformarStringEnArrayDeNumeros(stringPrueba1, separa))
console.log("--------------------------------------------")
console.log(transformarStringEnArrayDeNumeros(prueb1))
console.log(transformarStringEnArrayDeNumeros(prueb1).length)
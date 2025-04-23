import fileUtils from "./src/utils/fileUtils.js"
import transformUtils from "./src/utils/transformUtils.js"
import apareo from "./src/apareo.js"

const separador = ','

// leo los 4 archivos a memoria

let file10NumA = fileUtils.leerArchivoComoString('in/10NumerosOrdenadosEntre1y50(setA).in')
let file10NumB = fileUtils.leerArchivoComoString('in/10NumerosOrdenadosEntre1y50(setB).in')
let fileImparesOrdenados = fileUtils.leerArchivoComoString('in/imparesOrdenadosEntre1y999.in')
let fileParesOrdenados = fileUtils.leerArchivoComoString('in/paresOrdenadosEntre2y1000.in')

// preparo los 4 arrays a partir de los archivo leidos

let array10NumA =  transformUtils.transformarStringEnArrayDeNumeros(file10NumA, separador)
let array10NumB =  transformUtils.transformarStringEnArrayDeNumeros(file10NumB, separador)
let arrayImparesOrdenados =  transformUtils.transformarStringEnArrayDeNumeros(fileImparesOrdenados, separador)
let arrayParesOrdenados =  transformUtils.transformarStringEnArrayDeNumeros(fileParesOrdenados, separador)

// combino los primeros dos arrays

let combinadoAyB = apareo.combinarDosArrays(array10NumA, array10NumB)

// combino los cuatro arrays

const matrizTodos = [combinadoAyB, arrayImparesOrdenados, arrayParesOrdenados]
let combinadoTodos = apareo.combinarNArrays(matrizTodos)

/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let combinado = arrA.concat(arrB)
    let combiandoSinDuplicados = combinado.filter((item, index) => combinado.indexOf(item) === index)
    return combiandoSinDuplicados.sort((a, b)=>{return a-b})
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {nuber[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let combinado = []
    let i = 0
    while(i < arrs.length){
        let arrayAux = arrs[i]
        combinado = combinarDosArrays(combinado, arrayAux)
        i++
    }

    return combinado
}

export default{
    combinarDosArrays,
    combinarNArrays
}
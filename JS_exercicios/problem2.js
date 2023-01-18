// EXERCICIO PROPOSTO: recebe um array e soma de nums e soma todos os elementos
// depois soma cada unidade desses nums e retorna o somatorio total - o das unidades


function somarUnidade(arr){

    let x = arr.reduce((acum, i) => acum + i, 0) // soma total
    
    let novoArr = arr.join("")
    novoArr = novoArr.split('')
    novoArr = novoArr.map((num)=> Number(num))

    let y = novoArr.reduce((acum, i) => acum + i, 0) // soma das unidades

    return x-y;
}
let result = somarUnidade([12, 16, 20])
console.log(result)


//-------------------------------------------------------------------------------------------------


// let total = 0;
// function somarTudo(elemento) {
//     total += elemento;                                       // OPÇÃO 2 PARA SOMAR TUDO
// }    
// array.forEach(somarTudo);
// console.log(total); 



// let array = [3,5,5,7,9,9,1,9,2,5,7,9,2,42,12,56,87,34,23,34]
// function removeDuplicates(array) {    
//     console.log ([...new Set(array)])
//     }
// removeDuplicates(array)




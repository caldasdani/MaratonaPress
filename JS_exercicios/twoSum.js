//EXERCICIO: Dada uma matriz de inteiros NUMS e um inteiro ALVO
//           retorne os índices dos dois números de modo que eles somem o valor ALVO.
// Entrada: nums = [2,7,11,15], alvo = 9
// Saída: [0,1]
// Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].

function twoSum(nums, alvo){
    for (i = 1; i < nums.length; i++) {
        for (x = 0; x < i; x++) {
            console.log(x, i)
            if (nums[i] + nums[x] === alvo) {
            return [x, i];
            }
        }
    }
}
let result = twoSum([2,11,15,8,10,12,14,7], 9)
console.log(result)

// function twoSum(nums, alvo){      //PERCORRE O ARRAY DE TRAS PRA FERNTE
//     for (i = nums.length-2 ; i < nums.length; i--) {
//         for (x = nums.length-1; x > i; x--) {
//             console.log(x, i)
//             if (nums[i] + nums[x] === alvo) {
//             return [i, x];
//             }
//         }
//     }
// }
// let result = twoSum([2,11,15,8,10,12,14,7], 9)
// console.log(result)

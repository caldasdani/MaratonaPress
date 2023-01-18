//recebe um array e um valor, remove todas as ocorrecencias iguais ao valor de dentro do array

function removeElement(nums, val){
    for(i=nums.length-1 ; i>=0 ; i--){
        if(nums[i] === val){
            nums.splice(i, 1)
        }
    }
    return nums;
}
let result = removeElement([1,4,2,3,4,5,6,4,7,4,8,4], 4)
console.log(result)
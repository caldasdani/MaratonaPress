function palindrome(x){  // Confere se um ARRAY é palindromo ou não
    for(i=0 ; x.length>1 ; i){
        if(x[0] === x[x.length-1]){
            x.splice([x.length-1], 1);
            x.splice([0], 1);
        }
        else{
            return false
        }
    }  
    return true
}
let result = palindrome([1,2,3,2,1])
console.log(result)



// function palindrome(x){  //Confere se uma STRING é palindromo ou não
//     x = x.split('')
//     console.log(x)
//     for(i=0 ; x.length>1 ; i){
//         if(x[0] === x[x.length-1]){
//             x.splice([x.length-1], 1);
//             x.splice([0], 1);
//         }
//         else{
//             return false
//         }
//     }  
//     return true
// }
// let result = palindrome("abcddcba")
// console.log(result)



// function palindrome(x){  //Confere se uma NUMERO é palindromo ou não
//     let toNum = x => Number(x);
//     x = Array.from(String(x), toNum);

//     for(i=0 ; x.length>1 ; i){
//         if(x[0] === x[x.length-1]){
//             x.splice([x.length-1], 1);
//             x.splice([0], 1);
//         }
//         else{
//             return false
//         }
//     }  
//     return true
// }
// let result = palindrome(-121)
// console.log(result)
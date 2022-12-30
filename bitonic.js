function bitonic(lista){   

    var array = lista
    var novoArray = []
    var corte = array.length/2;
    

    if ([1,2,4,8,16,32,64,128,256,512,1024,2048].includes(array.length)){
        for(let i=0 ; i<corte ; i++){
            novoArray.push(array.pop());
        }
            
        array.sort((a,b) => a-b);
        novoArray.sort((a,b) => a-b);
        novoArray.reverse();

        console.log(array.concat(novoArray))
    }
    else{
        console.error("erro")
    }    
}

bitonic([22, 15, 3, 45, 54, 68, 1, 12]);
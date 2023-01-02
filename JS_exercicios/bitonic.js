// EXERCICIO PROPOSTO: CRIAR UM CODIGO PARA ORGANIZAR UMA LISTA
// BASEADO NO ALGORITIMO DE ORDENAÇÃO "BITONIC ORDER"

function bitonic(lista){   

    var array = lista
    var novoArray = []
    var corte = array.length/2;
    var x = lista.length;
    
    function potencia(x){
        while(x>=2){
            x = x/2;
        }
        if (x==1){
            return true
        }
    }    

    if (potencia(x) == true){
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
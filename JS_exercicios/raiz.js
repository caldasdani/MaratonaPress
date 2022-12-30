// EXERCICIO PROPOSTO: CRIAR UMA FUNÇÃO PARA CALCULAR A RAIZ DE UM NUMERO
// CASO NAO POSSUA RAIZ EXATA, RETORNAR O NUMERO MAIS PROXIMO

function raiz(x){
    let y = 0;

    while(y*y <= x)
    {
        y++
    }
    console.log(y-1) ;
};
raiz(3025);
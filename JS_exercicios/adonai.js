// EXERCICIO PROPOSTO: COMPARAR DUAS STRINGS E RETORNAR SE ELAS SÃO IGAUAIS OU NÃO
// DETALHE: O SIMBOLO DE # NA STRING EQUIVALERIA A TECLA DE BACKSPACE, OU SEJA, ABC## == A.

function main(string1, string2){
    const x = string1.split("");
    const y = string2.split("");

    function apagar(arg){
        const novoAry = []

        arg.forEach(index => {
            if(index == '#'){
                novoAry.pop()
            }else(
                novoAry.push(index)
            )
        })
        return novoAry.join()
    }

    console.log(apagar(x) === apagar(y));
}

main("####f", "y#f#o##f")
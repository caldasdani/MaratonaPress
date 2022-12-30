function main(string1, string2){
    const x = string1.split("");
    const y = string2.split("");

    function apagar(arg) {
        if(arg.includes("#")){
            if(arg.indexOf("#")!=0){
                arg.splice(arg.indexOf("#") -1, 1);
            }
            arg.splice(arg.indexOf("#"), 1);
        }
        if (arg.includes("#")){
            apagar(arg)
        }
        return arg.join()
    }
    console.log(apagar(x) === apagar(y));
}
main("y#fo##f","####f")
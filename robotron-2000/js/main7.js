const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

subtrair.addEventListener("click", ()=>{manipulaDados("subtrair")})
somar.addEventListener("click", ()=>{manipulaDados("somar")})


function manipulaDados(operacao){
    if(operacao == "subtrair"){
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}

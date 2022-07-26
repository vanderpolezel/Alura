//alert("ola")
const robotron = document.querySelector("#robotron")

robotron.addEventListener("click",function(){
    console.log("Cliquei no robô.")
})

robotron.addEventListener("click",() =>{
    console.log("Novo formato de declarar uma function. Aron function")
})

robotron.addEventListener("click",(evento) =>{
    console.log(evento)
})

robotron.addEventListener("click",dizOi)

function dizOi() {
    console.log("oi")
    console.log("Bem vindo ao Robotron 2000")

}

function dizOi(nome) {
    console.log("Oi" + nome)
    console.log("Bem vindo ao Robotron 2000")

}



dizOi("Vander")


//document.querySelector("#robotron").addEventListener("click", dizOi)


/*function myFunction() {
    document.querySelector("#retorna").innerHTML = "Confirma";
  }
  
  const elemento = document.querySelector("#botao");
  elemento.addEventListener("click", myFunction); */
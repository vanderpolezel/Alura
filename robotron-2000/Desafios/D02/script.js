/*
const varClicou = document.querySelector('#calcular')

varClicou.addEventListener("click", () =>{
    console.log('Fui clicado!')
})
*/


/* 
const varClicou =document.querySelector('#calcular')


varClicou.addEventListener("click", myFunction)


function myFunction(){
    console.log('Fui Clicado!!!')
}*/


/*
const varClicou =document.querySelector('#calcular')

varClicou.addEventListener("click",() =>{
    console.log('Fui Clicado!!!')
})

*/


const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})



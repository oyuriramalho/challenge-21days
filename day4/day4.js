let screen = document.querySelectorAll('.screen')[0]
let numButton = document.querySelectorAll('.num')
let decimalButton = document.querySelector('.decimal')
let equalButton = document.querySelector('.equal')
let cleanButton = document.querySelector('.clean')


let decimal = false // Não deixar colocar mais de 1 ponto decimal no mesmo número
let operations = "+-*/"

function numberOnScreen(N){
  console.log(N)
}

numButton.addEventListener("click", numberOnScreen(Event.target.innerText))


// numButton.addEventListener('click',)
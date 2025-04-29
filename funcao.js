// function saudacao(){
//     console.log("Bom dia!")
// }

//arrow function com parâmetros

// const saudacao = (turno, nome = "João")=>{
//     console.log(`${turno} ${nome}`)
// }

// saudacao("Bom dia", "Fabiano Lopes de Paula")
// saudacao("Boa noite")

// const soma = (x,y)=>{
//     return x+y
// }

const soma = (x,y)=> x+y

const subtracao = (x,y,z)=> x-y

const multiplicacao = (x,y,z) => x*y

const divisao = (x,y)=> x/y


// const resultadoDaSoma = soma(5,8,9)


// console.log(resultadoDaSoma)

//função retornando o calculo de duas funções 

// const calculo = (x,y,z,a)=>{
//     return soma (x,y) + multiplicacao(z,a)
// }

// const resultadoCalculo = calculo(10,2,5,7)

// console.log("Resltado do cálculo", resultadoCalculo)

// retornar o valor de várias funções em um objeto

// const calculo = (x,y)=>{
//     return {
//         soma: soma(x,y),
//         subtracao:subtracao(x,y),
//         multiplicacao:multiplicacao(x,y),
//         divisao:divisao(x,y)
//     }

// }

// const resultadoFinalDoCalculo = calculo(20,10)

// console.log("resulado final", resultadoFinalDoCalculo)

//escopo global e local (de bloco ou função)

const escopoGlobal = "Escopo Global"

function chamaEscopo(){
    const escopoLocal = "Escopo Local"
    console.log("escopp local",escopoGlobal)
}

console.log(escopoLocal)
// chamaEscopo()
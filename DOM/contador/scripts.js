let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})

const btnDecrementarValor = document.querySelector("#btnDecrementar")

btnDecrementarValor.addEventListener("click", ()=>{
    if(contador > 0){
    contador--
    resultado.textContent = `Contador: ${contador}`
    }
})
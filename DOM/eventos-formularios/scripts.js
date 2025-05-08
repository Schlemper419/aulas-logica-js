const inputForm = document.querySelector("#busca")

const botaoBusca = document.querySelector("#botaoBusca")

const resultadoDiv = document.querySelector("#resultado")

inputForm.addEventListener("keydown", (event)=>{
    //console.log(e.key)
    //resultadoDiv.textContent = event.key
    if(event.key === "Enter"){
        botaoBusca.click()
    }
})

inputForm.addEventListener("focus", ()=>{
    inputForm.style.backgroundColor = "FF0"
})

inputForm.addEventListener("blur",()=>{
    inputForm.style.backgroundColor = ""
})

function searchResult(){
    const valorBusca = inputForm.value.trim()
    if(valorBusca){
        resultadoDiv.textContent = `Você buscou por ${valorBusca}`
    }
    else{
        resultadoDiv.textContent = "Por favor, insira algo em busca"
    }
}

botaoBusca.addEventListener("click", ()=>{
    searchResult()
})
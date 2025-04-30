// crie um programa que verifique o faturamento médio dos 3 trimestres de 2024, sendo:

// 1 trimeste => 10.650

// 2 trimestre => 20.000

// 3 trimestre => 35.000

//se for maior que 25.000, o faturamento médio é o esperado. Mas, se o faturamento for menor de 25.000, o faturamento
//médio esta abaixo do esperado

// utilize um objeto para registrar os detalhes. Utilize desestruturação para facilitar o acesso aos elemento,
// e fazer os cálculos. Por fim, use um condicional

const faturamento = {
    primeiroTrimestre: 10650,
    segundoTrimestre: 20000,
    terceiroTrimestre: 35000

}

const {primeiroTrimestre,segundoTrimestre,terceiroTrimestre} = faturamento

const mediaDeFaturamento = ((primeiroTrimestre + segundoTrimestre + terceiroTrimestre) / 3).toFixed(2)



if(mediaDeFaturamento > 25000){
    console.log("O faturamento médio é o esperado")
}
else{
    console.log("O faturamento médio esta abaixo do esperado")
}


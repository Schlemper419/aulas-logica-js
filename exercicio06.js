//crie um array de objetos em que cada objeto é um produto,tendo como chave (nome, preço, descrição). Crie pelo
//menos 3 produtos

//Crie uma variável que ira armazenar o array com os nomes dos produtos

//crie uma segunda variável que irá armazenar o array com os preços dos produtos

//Use o laço for ou for of para exibir cada item do array da variável de nomes no console

const produtos = [
    {
        nome: "notebook",
        preco: 5000,
        descricao:"um notebook que da imagens" 
    },

    {
        nome: "mouse",
        preco: 150,
        descricao:"um mouse que clica" 
    },

    {
        nome: "teclado",
        preco: 300,
        descricao:"um teclado que escreve" 
    }
]

const nomeProduto = produtos.map(produto => produto.nome)

const precoProduto = produtos.map(produto => produto.preco)

for (let i = 0; i < nomeProduto.length; i++) {
    console.log(nomeProduto[i])
    
}

for (let i = 0; i < precoProduto.length; i++) {
    console.log(precoProduto[i])
    
}
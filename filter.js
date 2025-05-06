const numeros = [1,2,3,4,5]

const pares = numeros.filter(num => num % 2 == 0)

// console.log("Números pares", pares)

const produtos = [
    {
        nome:"Notebook",
        preco:3000
    },

    {
        nome:"Mouse",
        preco:50
    },

    {
        nome:"Mouse",
        preco:100
    },

    {
        nome:"Monitor",
        preco:1200
    },

    {
        nome:"Teclado",
        preco:150
    }
]

const produtosMaioresQueMil = produtos.filter(produto => produto.preco < 120)

const mouses = produtos.filter(produto => produto.nome === "Mouse")

console.log(mouses)

// console.log(produtosMaioresQueMil)
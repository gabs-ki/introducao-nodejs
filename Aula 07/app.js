/*************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24-02-2023
 * Autor: Kian
 * Versão: 1.0
 *************************************************************/

// [ ] - representa um objeto do tipo array
// { } - representa um objeto do tipo JSON

const listaNomes = ['Nami', 'Luffy', 'Zoro', 'Ace', 'Sanji', 'BarbaBranca', {nome: 'Jason', idade: 10}]
//const listaNomes = ['Nami', false, true, 20, 'Luffy', 'Zoro', 'Ace', 'Sanji', 'BarbaBranca']

const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']

const exibindoDados = function () {
   


// Exibe todos os itens do array
console.log(listaNomes)

// Verifica o tipo de dados do elemento listaNomes
console.log(typeof(listaNomes))

// Verifica o tipo de dados dos itens do array
console.log(typeof(listaNomes[0]))

//Traz só o conteúdo do índice zer0
console.log(listaNomes[0])

//table - permite vizualizar o conteúdo do array em formato de tabela
//console.table(listaNomes)

console.log('O nome do aluno é: ' + listaNomes[0])
console.log(`O nome do aluno é: ${listaNomes[1]}`)

//length - retorna a quantidade de itens de um array
console.log(listaNomes.length)

//Percorrendo um array com while
console.log('Exemplo com While')
let cont = 0 //Start
let qtdeItens = listaNomes.length //Stop

while (cont < qtdeItens) {
    console.log(`O nome do aluno é: ${listaNomes[cont]}`)
    cont +=1
}

//Percorrendo um array com For
console.log('Exemplo com For')

for(let cont = 0; cont < qtdeItens; cont++) 
    console.log(`O nome do aluno é: ${listaNomes[cont]}`)

//Percorrendo um array com ForEach
console.log('Exemplo com ForEach')

listaNomes.forEach(function(nome) {
    console.log(`O nome do aluno é: ${nome}`)
});

console.log('Exemplo com ForEach (Forma mais antiga)')
for (item in listaNomes)
    console.log(`O nome do aluno é: ${listaNomes[item]}`)


//Versão Luis
listaNomes.forEach(
    (nome) => console.log(`O nome do aluno é: ${nome}`)
)

}

const manipulandoDados = function () {
    //push - adiciona novos itens no final do array, preservando os elementos anteriores
    listaProdutos.push('Memória')
    listaProdutos.push('WebCam', 'Gabinete', 'Fone')
    console.table(listaProdutos)

    //unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'Placa-mâe', 'SSD')
    console.table(listaProdutos)

    //pop - Remove o último item do array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    // shift - Remove o item do inicio do Array, re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - Permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice()
    console.log(novosProdutos)

    //indexOf - Permite buscar dentro de um array um item
        //Se o retorno for -1, o item não foi encontrado
        //Se o retorno for maior ou igual a 0, o item foi encontrado e ele retorna o indice

    console.log(listaProdutos.indexOf('PCs'))

    //Exemplo de utilização do indexOf
    if (listaProdutos.indexOf('Teclado') >= 0) {
        console.log('Item encontrado')
    } else {
        console.log('Item não encontrado')
    }

}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - Permite apagar um ou mais itens de um array através do indice
        //Se for encaminhando somente o indice ele irá apagar todos os itens
        //para baixo
            //Para limitar a qtde de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    return status
}

const desafio = function (nomeProduto, novaArray) {
    //Entrada
    let nome = nomeProduto
    // let listaNova = listaProdutos.slice()
    
    let listaNova = novaArray.slice()
    
    let indice = listaNova.indexOf(nome)

    let status = true


    //Processamento
    if (indice >= 0) {

        listaNova.splice(indice, 1)

        console.log('Lista Nova: ' + listaNova + '\n')
        console.log('Lista antiga: ' + listaProdutos)
        
        status = listaNova

    } else {
        status = false
        console.log('Não deu certo :/ ')
    } 
    return status

    //Saida
    // if(status)
    //     return listaNova
    // else
    //     return false
    
}

// console.table(listaProdutos)
// console.log(removerProduto('Mouse'))
// console.table(listaProdutos)
//manipulandoDados()

desafio('Teclado', listaProdutos)

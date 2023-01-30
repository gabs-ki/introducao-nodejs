//Comentário em linha
/*
    Comentário
    Em
    Block

*/

//Permite exibir no terminal uma mensagem
console.log ('Testando o Node.JS')

//Import da biblioteca que permite entrada de dados via teclado
var readline = require('readline')

//Criamos uma váriavel que vai ser especialista na entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//CallBack - Uma função de Callback permite que na própria linha de programação
//seja uma variavel, um processamento, a chamada de um metodo possa acontecer
//um retorno de dados automaticamente, sem precisar sair deste processamento.



// Cria uma interação com o usuário, para entrada de dados.
//Após o usuário digitar o conteúdo, o objeto entradaDados permite
//retornar o contúdo digitado para ser utilizado. Isso acontece através
//de uma função de CallBack.
entradaDados.question(
    'Favor digitar seu nome: \n', function(nome){
   
    console.log(
        'Bem vindo ' + nome + ' ao servidor Node.JS !'
    )
    console.log(
        nome
    )

})


var readline = require('readline')

var calcularTabuada = require('./modulo/tabuada.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Seja Bem Vindo à Tabuada \n' +
'Qual seu nome? \n',
function(nome) {
    let nomeCliente = nome

    if (nomeCliente == '') {
        console.log('O nome não pode ficar vazio!')
    } else {

        entradaDados.question('Digite a tabuada inicial: \n', function (minTabuada) {
            let minTab = minTabuada
        
            entradaDados.question('Digite a tabuada final: \n', function (maxTabuada) {
                let maxTab = maxTabuada
        
                entradaDados.question('Digite o minimo multiplicador: \n', function (multiplicadorMin) {
                    let multiplicador = multiplicadorMin
        
                    entradaDados.question('Digite o maximo multiplicando: \n', function (multiplicadorMax) {
                        let multiplicando = multiplicadorMax
                        let calcularTabuadaDois = Number()
        
                         calcularTabuadaDois = calcularTabuada.geradorDeConta(minTab, maxTab,multiplicador , multiplicando)
                         
                        if (calcularTabuada == false) {
                            entradaDados.close()
                        } else {
                            entradaDados.close()
                        }
                    })
                })
            })
        })
    }
}
)
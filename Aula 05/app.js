/*************************************************************************************************************  
* Objetivo: Arquivo destinado ao processamento do calculco de uma tabuada
* Data: 09-02-2023
* Autor: Marcelo
* Versão: 1.0
***************************************************************************************************************/

var tabuada = require('./modulo/tabuada.js')
var readline = require('readline')
var resultado

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('valor: \n', function(numero1){
    let valor1 = numero1

    entradaDados.question('valor: \n', function(numero2){
        let valor2 = numero2

        resultado = tabuada.calcularTabuada(valor1, valor2)
        if(resultado == true) {
            console.log(resultado)
        } else {
            console.log('ERRO')
        }

    })

})

/***************************************************************************
 * Objetivo: Fazer uma calculadora básica
 * Autor: Gabriel
 * Data: 30-01-2023
 * Versão: 1.0
 ***************************************************************************/
const { match } = require('assert')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

entradaDados.question('Digite seu nome \n', function(nome){

    console.log('Bem vindo ' + nome + ' á calculadora! \n \n - Você pode digitar dois valores, seguido da operação aritmética. \n')

    entradaDados.question(' Digite um numero: \n', function(numero1){
    
        let valor = numero1
        // Use o replace para fazer a troca de um caractere na string
        let valor1 = valor.replace(',','.')

        if (valor1 == '') {

            console.log('ERRO: você deixou o valor vazio! ')

        } else if (isNaN(valor1)) {

            console.log('ERRO: você precisa digitar um número! ')

        } else {

            entradaDados.question('\n Digite um número: \n', function(numero2){

                let valor = numero2
                let valor2 = valor.replace(',','.')
            
                if(valor2 == '') {

                    console.log('ERRO: você deixou o valor vazio')

                } else if (isNaN(valor2)) {

                    console.log('ERRO: você precisa digitar um número')
            
                }   else {
                    let valoresDigitados = '\n    Valor um: ' + valor1 + ', Valor dois: ' + valor2 + '\n'
                    

                    entradaDados.question(valoresDigitados + ' *********************************** \n  Escolha uma operação aritmética: \n  1 = Soma \n  2 = Subtração \n  3 = Multiplicação \n  4 = Divisão \n *********************************** \n', function(operacao){
                        let operacaoAritmetica = Number(operacao)
                        let soma
                        let subtracao
                        let multiplicacao
                        let divisao
                        
                        
        
                        if(operacaoAritmetica == 1){
        
                            console.log('\n Você escolheu Soma! \n')
                                soma = Number(valor1) + Number(valor2)
                            console.log('O resultado é: ' + soma + '\n')
 
                        } else if(operacaoAritmetica == 2) {
        
                            console.log('\n Você escolheu Subtração! \n')
                             subtracao = Number(valor1) - Number(valor2)
                            console.log('O resultado é: ' + subtracao + '\n') 
        
                        } else if (operacaoAritmetica == 3) {
        
                            console.log('\n Você escolheu Multiplicação! \n')
                             multiplicacao = Number(valor1) * Number(valor2)
                            console.log('O resultado é: ' + multiplicacao + '\n') 
        
                        } else if (operacaoAritmetica == 4) {
                            
                            if (valor2 == 0) {
                                console.log('\n Você escolheu Divisão! \n')
                                console.log('AVISO: não é possível a divisão por 0! \n')
                            } else {
                                console.log('\n Você escolheu Divisão! \n')
                                divisao = Number(valor1) / Number(valor2)
                                console.log('O resultado é: ' + divisao + '\n') 
                        }
   
                        } else {
                            console.log('Digite um número válido, dentre as quatro opcões aritméticas!')
                        }
                    })
                }
    
            })


        }

    })
    
})
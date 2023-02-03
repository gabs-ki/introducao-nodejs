/**
 * Objetivo: Projeto para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 03-02-2023
 * Autor: Kian
 * Versão: 1.1
 */


//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js')


//Importa da biblioteca para entrada de dados
var readline = require('readline')


// Cria um objeto para manipular as entradas de dados
var entradaDados = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})


//Valor 1
entradaDados.question('valor: \n', function(numero1){
    //replace - método da classe string que localiza um caracter e substitui por outro
    let valor1 = numero1.replace(',', '.')

    //exemplos de métodos importantes da classe String
    //replace, substring, length, upercase, lowercase, indexOf, trim

    //Valor2
    entradaDados.question('valor2: \n', function(numero2){
        
        let valor2 = numero2.replace(',', '.')
        

        //Tipo de operação matemática
        entradaDados.question('Escolha uma peracao matematica: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ] \n', function(tipoCalculo){
            
            let operacao = tipoCalculo.toUpperCase()
            let resultado
            
            if(valor1 == '' || valor2 == '' || operacao == '') {
            
                console.log('ERRO: Não é possível calcular se algum dado estiver em branco')
            //else if (typeof(valor1) != 'number')
                //typeof() - identifica o tipo de dados de um elemnto
            
                //O isNan - identifica o tipo de conteúdo indepentemente do tipo de dados
            
            //Validacão para entrada de dados númericos
            } else if (isNaN(valor1) || isNaN(valor2)) {
            
                console.log('ERRO: Não é possível calcular se os dados digitados não forem números')
                entradaDados.close()
            
            } else {

                //Obs: toUpperCase - converte uma String em MAIUSCULO
                // ToLowerCase - converte um String em minusculo
               if ( resultado = matematica.calculadora(valor1, valor2, operacao)) {
                console.log(resultado)
               } else {
                entradaDados.close
               }
                
                
            }
        })

    })

}) 



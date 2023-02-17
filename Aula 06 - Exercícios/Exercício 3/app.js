
var readline = require('readline')

var calcularImparPar = require('./modulo/verificacaoParImpar.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Seja bem vindo á Calculadora Impar e Par \n' +
    '* Qual seu Nome * \n', function (nome) {

        let usuario = nome

        if (usuario == '' || usuario.length <= 2) {
            console.log('Digite um nome válido!')
            entradaDados.close
        } else {
            entradaDados.question('Digite o número mínimo: \n', function (numMin) {
                let minValor = Number(numMin.replace(',', '.'))

                if (minValor == '') {
                    console.log('Digite um valor!')
                } else if (minValor < 0 || minValor > 500) {
                    console.log('Erro: Digite um número entre 0 e 500')
                } else {
                    entradaDados.question('Digite o número maxímo: \n', function (numMax) {
                        let maxValor = Number(numMax.replace(',', '.'))

                        if (maxValor == '') {
                            console.log('Digite um valor!')

                        } else if (maxValor < 100 || maxValor > 1000) {
                            console.log('Erro: O valor maximo precisa ser entre 100 e 1000!')
                        } else if (minValor == maxValor) {
                            console.log('Os valores precisam ser diferentes!')
                        } else if (minValor > maxValor) {
                            console.log('O valor mínimo precisa ser menor que o máximo!')
                        } else {

                            entradaDados.question('-------------------------- \n' +
                                ' - Você pode escolher se quer numeros pares ou ímpares: - \n' +
                                '* Digite 1 para ímpares \n' +
                                '* Digite 2 para pares \n' +
                                '* Digite 3 para ambos \n', function (escolha) {

                                    let decisao = Number(escolha)

                                    if (decisao == '') {
                                        console.log(' Digite uma escolha!')
                                    } else if (decisao == isNaN(decisao)) {
                                        console.log(' Digite um número válido, entre as três opções!')
                                    } else if (decisao == 1) {
                                        console.log('--------Tabela de Ímpares--------')
                                        let impar = calcularImparPar.verificacaoImpar(minValor, maxValor)
                                        console.log('-------------------------------')
                                    } else if (decisao == 2) {
                                        console.log('--------Tabela de Pares--------')
                                        let par = calcularImparPar.verificacaoPar(minValor, maxValor)
                                        console.log('-------------------------------')

                                    } else if (decisao == 3) {

                                        entradaDados.question('Você pode escolher entre tabelas separadas e números juntos: \n' +
                                            '* Digite 1 para TABELAS SEPARADAS \n' +
                                            '* Digite 2 para NÚMEROS JUNTOS \n', function (tabEscolha) {

                                                let tabDecisao = Number(tabEscolha)

                                                if (tabDecisao == '') {

                                                    console.log('Digite uma escolha')

                                                } else if (tabDecisao == isNaN(tabDecisao)) {

                                                    console.log('Digite um número válido, entre as três opções!')

                                                } else if (tabDecisao == 1) {

                                                    console.log('--------Tabela de Pares--------')
                                                    let par = calcularImparPar.verificacaoPar(minValor, maxValor)
                                                    console.log('-------------------------------')

                                                    console.log('--------Tabela de Ímpares--------')
                                                    let impar = calcularImparPar.verificacaoImpar(minValor, maxValor)
                                                    console.log('-------------------------------')

                                                    entradaDados.close

                                                } else if (tabDecisao == 2) {

                                                    console.log('--------Ambas Tabelas--------')
                                                    let ambas = calcularImparPar.verificacaoAmbas(minValor, maxValor)
                                                    console.log('-------------------------------')

                                                    entradaDados.close

                                                } else {

                                                    console.log('Ocorreu um erro nas tabelas!')

                                                }

                                            })
                                    } else {
                                        console.log('Erro inesperado!')
                                    }
                                })

                        }
                    })
                }

            })
        }

    })





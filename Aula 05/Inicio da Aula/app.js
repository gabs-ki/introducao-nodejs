/**
 * Objetivo: Correções de erro da calculadora e estruturação do código
 * Data: 09-02-2023
 * Autor: Kian
 * Versão: 1.0
 */

//A variavel status pode ser usada para retornar valores booleanos para validar os dados
let status = true

/*
//Validação para tratar a divisião por 0
 if (valor2 == 0) {
    console.log('ERRO: Não é possível realizar a divisão por 0')
    status = false
} else {
    resultado = valor1 / valor2
}
} else {
console.log('ERRO: A sua escolha de operação matemática foi inválida!')
//finaliza o call back do objeto de entrada de dados (Sai do programa)
status = false
}
*/


//O switch serve para estruturar melhor o nosso código, sendo menos redundante, precisando dos "cases"
//para dividir os blocos
switch (operacao) {
    case 'SOMAR':
        resultado = valor1 + valor2
        /*
        3º forma de processar a function
        resultado = SOMAR(valor1, valor2)
        */
        break
    case 'SUBTRAIR':
        resultado = valor1 - valor2
        /*
        3º forma de processar a function
        resultado = SUBTRAIR(valor1, valor2)
        */
        break
    case 'MULTIPLICAR':
        resultado = valor1 * valor2
        /*
        3º forma de processar a function
        resultado = MULTIPLICAR(valor1, valor2)
        */
        break
    case 'DIVIDIR':
        resultado = valor1 / valor2
        /*
        3º forma de processar a function
        resultado = DIVIDIR(valor1, valor2)
        */

        //Validação para tratar a divisião por 0
        if (valor2 == 0) {
            console.log('ERRO: Não é possível realizar a divisão por 0')
            status = false
        } else {
            resultado = valor1 / valor2
        }
        break
        // Se o switch não conseguir o resultado em nenhum dos cases, ele vai cair no default,
        //que seria o else do if
    default:
        console.log('ERRO: A sua escolha de operação matemática foi inválida!')
        status = false

}

//Forma 01 de criar um função
function calculadora(numero1, numero2, tipoCalculo){

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    switch (operacao) {
        case 'SOMAR':
            resultado = valor1 + valor2
            break
        case 'SUBTRAIR':
            resultado = valor1 - valor2
            break
        case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break
        case 'DIVIDIR':
            resultado = valor1 / valor2

            //Validação para tratar a divisião por 0
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar a divisão por 0')
                status = false
            } else {
                resultado = valor1 / valor2
            }
            break
        default:
            console.log('ERRO: A sua escolha de operação matemática foi inválida!')

            status = false
    }


    //Validação para tratar quando a variavel resultado não for processado por algum problema
    if (resultado == undefined && status == false) {
        //A função sempre precisa resolver a operação e devolver o valor, se não, 
        //ela deve devolver um valor genérico que nesse caso é o false(booleano), 
        //pois a função pode ser usada em outros projetos
        return false


    } else {
        return resultado

    }
}

//Forma 02 de criar um função (é uma das mais utilizadas)
const calculadora = function(numero1, numero2, tipoCalculo){
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true

    switch (operacao) {
        case 'SOMAR':
            resultado = valor1 + valor2
            break
        case 'SUBTRAIR':
            resultado = valor1 - valor2
            break
        case 'MULTIPLICAR':
            resultado = valor1 * valor2
            break
        case 'DIVIDIR':
            resultado = valor1 / valor2

            //Validação para tratar a divisião por 0
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar a divisão por 0')
                status = false
            } else {
                resultado = valor1 / valor2
            }
            break
        default:
            console.log('ERRO: A sua escolha de operação matemática foi inválida!')

            status = false
    }


    //Validação para tratar quando a variavel resultado não for processado por algum problema
    if (resultado == undefined && status == false) {
        //A função sempre precisa resolver a operação e devolver o valor, se não, 
        //ela deve devolver um valor genérico que nesse caso é o false(booleano), 
        //pois a função pode ser usada em outros projetos
        return false


    } else {
        return resultado

    }
}

//Forma 03 de criar um função (modelo chamado de arrow Function)
const SOMAR = (valor1,valor2) => Number(valor1 + valor2).toFixed(2)

const SUBTRAIR = (valor1,valor2) => valor1 - valor2

const MULTIPLICAR = (valor1,valor2) => valor1 * valor2

const DIVIDIR = (valor1,valor2) => valor1 / valor2


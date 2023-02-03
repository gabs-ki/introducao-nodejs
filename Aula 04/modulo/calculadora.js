/**
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03-02-2023
 * Autor: Kian
 * Versão: 1.0
 */



//Método tradicional de criar função
//Função para realizar calculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
function  calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado

    if (operacao == 'SOMAR')

        resultado = valor1 + valor2

    else if (operacao == 'SUBTRAIR')

        resultado = valor1 - valor2

    else if (operacao == 'MULTIPLICAR')

        resultado = valor1 * valor2

    else if (operacao == 'DIVIDIR') {

        resultado = valor1 / valor2

        //Validação para tratar a divisião por 0
        if (valor2 == 0) {
            console.log('ERRO: Não é possível realizar a divisão por 0')
            return false
        } else {
            resultado = valor1 / valor2
        }
    } else {
        console.log('ERRO: A sua escolha de operação matemática foi inválida!')
        //finaliza o call back do objeto de entrada de dados (Sai do programa)
        entradaDados.close()
    }


    //Validação para tratar quando a variavel resultado não for processado por algum problema
    if (resultado != false) {
        //A função sempre precisa resolver a operação e devolver o valor, se não, 
        //ela deve devolver um valor genérico que nesse caso é o false(booleano), 
        //pois a função pode ser usada em outros projetos
        console.log(resultado)
        entradaDados.close
     
    } else {
        entradaDados.close()
        
    }
}


//Permite adicionar uma function no escopo global (public)
//As functions que não estiverem aqui no export, serão tratadas apenas como escopo local (private)
module.exports = {
    calculadora
}
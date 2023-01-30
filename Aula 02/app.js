/****************************************************************
* Objetivo:  Calcular a média de quatro notas escolares 
* Autor:     Gabriel
* Data:      27-01-2023
* Versão:    1.0
*****************************************************************/

//Importa da biblioteca readline

var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input:process.stdin, //Entrada de dados do teclado
    output: process.stdout //Disponibiliza para você os dados
})

/*
 Criação de Variáveis

 *var = cria um espaço em memória de escopo global para o projeto, ou seja, essa variavel
    poderá ser utilizada em qualquer parte do arquivo ( várias funções )
 
 *let = cria um espaço em memória de escopo local para o projeto, ou seja, essa variavel
    somente poderá ser utilizada em dentro da função que foi criada.
 
 *const = cria um espaço em memória de escopo local ou global para o projeto, ou seja, essa constante
    poderá ser utilizada  em qualquer parte do projeto e nunca sofrerá alteração


*/


    //Funcção de callback para entrar o nome do aluno
    entradaDados.question(' Digite seu nome: \n', function(nome){
    let nomeAluno = nome
    console.log('Bem vindo ' + nomeAluno + ' ao INFERNO')
       
        //Funcção de callback para entrar a nota1
        entradaDados.question('Digite a nota1: \n', function(nota1){
          let valor1 = nota1
  
            //Funcção de callback para entrar a nota2
            entradaDados.question('Digite a nota2: \n', function(nota2){
                let valor2 = nota2

                 //Funcção de callback para entrar a nota3
                entradaDados.question('Digite a nota3: \n', function(nota3){
                    let valor3 = nota3

                    //Funcção de callback para entrar a nota4
                    entradaDados.question('Digite a nota4: \n', function(nota4){
                        let valor4 = nota4
                        let media

                        /*
                            Conversão de Tipos De Dados
                            parseINn() ou Number.parseInt() = converte string em inteiro
                            parseFloat() ou Number.parseFloat() = converte string em real

                            Number() = Converte String para número, conforme a entrada do valor
                            o JS define se será inteiro ou real
                        

                            Operadores de comparação
                            == (verifica a igualdade entre conteudos)
                            != (verifica a diferença entre conteudos)
                            === (verifica a igualdade entre conteudos e tipo de dados)
                                Exemplo: 0  ===  0    V
                                         0  === '0'   F
                                        '0' ===  0    F
                                         0  ===  0.0  F
                                         0  ==   0    V
                                         0  ==  '0'   V
                                        '0' ==   0    V

                            !== (verifica a diferença entre conteudos e igualdade de tipo de daods)
                                Exemplo:
                            ==! (verifica a igualdade entre conteudos e diferença de tipo de dados)
                                Exemplo:
                            < (menor)
                            > (maior)
                            <= (menor ou igual)
                            => (maior ou igual)
                        */ 

                            /*
                            Operadores Lógicos

                            E           &&      AND
                            OU          ||      OR
                            NEGAÇÃO     |       NOT

                            Ordem de execução dos operadores lógicos
                            
                            0º () - párenteses
                            1º NOT
                            2º AND
                            3º OR
                            

                            */
                            // Validação para entrada vazia
                            if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){
                            
                                console.log('ERRO: você deixou de entrar com algum valor')
                            
                            // Validação para entrada de texto (inválida)
                            // }else if (!(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4))) {
                            // para negar toda a situação
                            }else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                                
                                console.log('ERRO: você não digitou um número válido')
                            
                                //Validação para entrada de dados somente entre 0 e 10
                            } else if (Number(valor1) < 0 || Number(valor2) < 0 || Number(valor3) < 0 || Number(valor4) < 0 ) {
                                
                                console.log('ERRO: Digite um numero acima de 0')

                            } else if (Number(valor1) > 10 || Number(valor2) > 10 || Number(valor3) > 10 || Number(valor4) > 10 ) {
                                
                                console.log('ERRO: Digite um valor abaixo de 10')
                            }
                            else {
                                media = (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4))/4
                                
                                
                                if (media >= 7.0) {
                                    console.log('O aluno foi aprovado')
                                } else {
                                    console.log('O aluno foi reprovado')
                                }

                                console.log('Média do aluno: ' + media.toFixed(1))
                            }

                            /*
                            - media.toFixed é usado para definir quantas casas decimais queremos que sejam exibidas
                                o número 1 define que apenas uma casa seja exibida
                            */


                            /*
                            Objetivos Aula 30/01 :

                            -
                            * Notas digitadas sejam entre 0 e 10
                            * Colocar o status da média do aluno - acima de 7 aprovado - abaixo de 7 reprovado
                            -

                            */

                        
                        
                        


                    })
            
                })


            })

        })
    
    
    })






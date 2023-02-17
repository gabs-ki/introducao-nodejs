var readline = require('readline')

var calcularMedia = require('./modulo/media.js')
var validacaoNomes = require('./modulo/nomes.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

entradaDados.question(
    '----------CADASTRO DE ALUNO-----------\n' +
    'Qual o nome do aluno? \n',
    function (nomeDoAluno) {


        let nomeAluno = nomeDoAluno

        if (nomeAluno.length <= 3) {
            console.log('ERRO: O nome precisa ter mais de três letras!')
            entradaDados.close
        } else {
            entradaDados.question('Qual o genêro do Aluno(a)? \n' +
                '- Digite M para "Masculino" \n' +
                '- Digite F para "Feminino" \n',
                function (generoDoAluno) {
                    let generoAluno = generoDoAluno

                    if (generoAluno == '' || generoAluno != 'M' || generoAluno == 'F') {
                        console.log('Digite um genero válido!')
                    } else if (nomeAluno === Number || generoDoAluno === Number) {
                        console.log('Digite uma palavra válida!')
                    } else {

                        entradaDados.question(' Qual o Curso? \n', function (cursoDoAluno) {
                            let curso = cursoDoAluno

                            if (curso == '' || curso.length <= 3 || curso === Number) {
                                console.log('Digite um nome válido para o curso!')
                            } else {

                                entradaDados.question(' Qual a Disciplina do Aluno? \n', function (disciplinaDoAluno) {
                                    let disciplina = disciplinaDoAluno

                                    if (disciplina == '' || disciplina.length <= 3 || disciplina === Number) {
                                        console.log('Digite um nome válido para o curso!')
                                    } else {

                                        entradaDados.question(' Qual o nome do Professor(a)? \n', function (nomeDoProfessor) {
                                            let nomeProfessor = nomeDoProfessor

                                            if (nomeProfessor == '' || nomeProfessor.length <= 3 || nomeProfessor === Number) {
                                                console.log('Digite um nome válido para o professor!')
                                            } else {

                                                entradaDados.question(' Qual o Gênero do Professor? \n' +
                                                    '- Digite M para "Masculino" \n' +
                                                    '- Digite F para "Feminino" \n',
                                                    function (generoDoProfessor) {
                                                        let genero = generoDoProfessor

                                                        if (genero == '' || genero === Number) {
                                                            console.log('Digite um genero válido para o professor(a)!')
                                                        } else {
                                                            entradaDados.question('1ª nota do aluno: \n', function (valor1) {
                                                                let nota1 = valor1
                                                        
                                                                if (nota1 == '' || nota1 >= 100 || nota1 <= 0) {
                                                                    console.log('Digite uma nota válida!')
                                                                } else {

                                                                    entradaDados.question('2ª nota do aluno: \n', function (valor2) {
                                                                        let nota2 = valor2
                                                            
                                                                        if (nota2 == '' || nota2 >= 100 || nota2 <= 0) {
                                                                            console.log('Digite uma nota válida!')
                                                                        } else { 

                                                                            entradaDados.question('3ª nota do aluno: \n', function (valor3) {
                                                                                let nota3 = valor3
                                                                        
                                                                                if (nota3 == '' || nota3 >= 100 || nota3 <= 0) {
                                                                                    console.log('Digite uma nota válida!')
                                                                                } else { 
                                                                                    entradaDados.question('4ª nota do aluno: \n', function (valor4) {
                                                                                        let nota4 = valor4
                                                                                
                                                                                        let resultado = calcularMedia.calculadoraDeMedia(nota1, nota2, nota3, nota4)
                                                                                        let statusDoAluno = calcularMedia.checagemDeStatus(resultado)
                                                                                        let professor = validacaoNomes.checagemDeNomeDoProfessor(nomeProfessor, genero)
                                                                                        let aluno = validacaoNomes.checagemDeNomeDoAluno(nomeAluno, generoAluno)
                                                                                
                                                                                        let exame
                                                                                
                                                                                        if (resultado == false) {
                                                                                            console.log('Erro na conta!')
                                                                                        } else if (professor == false) {
                                                                                            console.log('Erro no nome do professor! ')
                                                                                
                                                                                        } else if (aluno == false) {
                                                                                            console.log('Erro no nome do aluno! ')
                                                                                
                                                                                        } else if (statusDoAluno == false) {
                                                                                            console.log('Erro no status do aluno! ')

                                                                                        } else if (nota4 == '' || nota4 >= 100 || nota4 <= 0){
                                                                                            console.log('Digite uma nota válida!')

                                                                                        } else if (statusDoAluno == 'Exame') {
                                                                                
                                                                                            entradaDados.question('O aluno ficou em EXAME! \n Qual a nota do exame? \n', function (notaExameDois) {
                                                                                                exame = calcularMedia.mediaExame(resultado, notaExameDois)
                                                                                
                                                                                                if (exame == '') {
                                                                                                    console.log('ERRO: a nota de exame precisa ser preenchida')
                                                                                                } else if (exame <= 59) {
                                                                                                    console.log(aluno + ' ficou em [ ' + statusDoAluno + ' ] na disciplina [ ' + disciplina + ' ] \n' +
                                                                                                        'Curso: ' + curso + '\n' +
                                                                                                        professor + '\n' +
                                                                                                        'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.\n' +
                                                                                                        'Média Final: ' + resultado + '\n' +
                                                                                                        'Média Final Do Exame: ' + exame + '\n' +
                                                                                                        'O Aluno foi reprovado'
                                                                                                    )
                                                                                                } else {
                                                                                                    console.log(aluno + ' ficou em [ ' + statusDoAluno + ' ] na disciplina [ ' + disciplina + ' ] \n' +
                                                                                                        'Curso: ' + curso + '\n' +
                                                                                                        professor + '\n' +
                                                                                                        'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.\n' +
                                                                                                        'Média Final: ' + resultado + '\n' +
                                                                                                        'Média Final Do Exame: ' + exame + '\n' +
                                                                                                        'O Aluno foi Aprovado! '
                                                                                                    )
                                                                                                }
                                                                                
                                                                                            })
                                                                                        } else {
                                                                                            console.log(aluno + ' ficou em [ ' + statusDoAluno + ' ] na disciplina [ ' + disciplina + ' ] \n' +
                                                                                                'Curso: ' + curso + '\n' +
                                                                                                professor + '\n' +
                                                                                                'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.' +
                                                                                                ' Média Final: ' + resultado + ' \n' +
                                                                                                'Aluno Aprovado!'
                                                                                            )
                                                                                        }
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                    })

                                                                                }
                                                                                
                                                                            })
                                                                        }
                                                                        
                                                                    })
                                                                }
                                                        
                                                        
                                                            })
                                                        }
                                                        


                                                    })
                                            }


                                        })
                                    }


                                })
                            }
                        })
                    }


                })
        }



    })









   
    




   



























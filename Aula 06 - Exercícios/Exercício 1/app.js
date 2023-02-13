var readline = require('readline')

var calcularMedia = require('./modulo/media.js')
var validacaoProfessor = require('./modulo/nome_professor.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question(
    '----------CADASTRO DE ALUNO-----------\n' +
    'Qual o nome do aluno? \n', function (nomeAluno) {
        let aluno = nomeAluno

        entradaDados.question(' Qual o Curso? \n', function (cursoDoAluno) {
            let curso = cursoDoAluno

            entradaDados.question(' Qual a Disciplina do Aluno? \n', function (disciplinaDoAluno) {
                let disciplina = disciplinaDoAluno

                entradaDados.question(' Qual o nome do Professor(a)? \n', function (nomeDoProfessor) {
                    let nomeProfessor = nomeDoProfessor

                    entradaDados.question(' Qual o Gênero do Professor? \n', function (generoDoProfessor) {
                        let genero = generoDoProfessor

                        entradaDados.question('1ª nota do aluno: \n', function (valor1) {
                            let nota1 = valor1

                            entradaDados.question('2ª nota do aluno: \n', function (valor2) {
                                let nota2 = valor2

                                entradaDados.question('3ª nota do aluno: \n', function (valor3) {
                                    let nota3 = valor3

                                    entradaDados.question('4ª nota do aluno: \n', function (valor4) {
                                        let nota4 = valor4



                                        let resultado = calcularMedia.calculadoraDeMedia(nota1, nota2, nota3, nota4)
                                        let statusDoAluno = calcularMedia.checagemDeStatus(resultado)
                                        let professor = validacaoProfessor.checagemDeNomeDoProfessor(nomeProfessor, genero)
                                        let exame

                                        if (resultado == false) {
                                            console.log('Erro na conta!')
                                        } else if (professor == false) {
                                            console.log('Erro no nome do professor! ')
                                        } else if (statusDoAluno == 'Exame') {

                                            entradaDados.question('O aluno ficou em EXAME! \n Qual a nota do exame? \n', function (notaExameDois) {
                                                exame = calcularMedia.mediaExame(resultado, notaExameDois)

                                                if (exame == '') {
                                                    console.log('ERRO: a nota de exame precisa ser preenchida')
                                                } else if (exame <= 59) {
                                                    console.log('O aluno [ xxxxxx ] ficou em [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' +
                                                        'Curso: xxxxxxxx \n' +
                                                         professor + '\n' +
                                                        'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.\n' +
                                                        'Média Final: ' + resultado + '\n' +
                                                        'Média Final Do Exame: ' + exame + '\n' +
                                                        'O Aluno foi reprovado'
                                                    )
                                                } else {
                                                    console.log('O aluno [ xxxxxx ] ficou em [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' +
                                                        'Curso: xxxxxxxx \n' +
                                                         professor + '\n' +
                                                        'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.\n' +
                                                        'Média Final: ' + resultado + '\n' +
                                                        'Média Final Do Exame: ' + exame + '\n' +
                                                        'O Aluno foi Aprovado! '
                                                    )
                                                }

                                            })
                                        } else {
                                            console.log('O aluno [ xxxxxx ] ficou [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' +
                                                'Curso: xxxxxxxx \n' +
                                                 professor + '\n' +
                                                'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.' +
                                                ' Média Final: ' + resultado
                                            )
                                        }


                                    })
                                })
                            })


                        })


                    })

                })
            })
        })

    })










































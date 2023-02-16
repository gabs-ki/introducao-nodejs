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

                entradaDados.question(' Qual o Curso? \n', function (cursoDoAluno) {
                    let curso = cursoDoAluno

                    entradaDados.question(' Qual a Disciplina do Aluno? \n', function (disciplinaDoAluno) {
                        let disciplina = disciplinaDoAluno

                        entradaDados.question(' Qual o nome do Professor(a)? \n', function (nomeDoProfessor) {
                            let nomeProfessor = nomeDoProfessor

                            entradaDados.question(' Qual o Gênero do Professor? \n' +
                                '- Digite M para "Masculino" \n' +
                                '- Digite F para "Feminino" \n',
                                function (generoDoProfessor) {
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
                                                    } else if (statusDoAluno == 'Exame') {

                                                        entradaDados.question('O aluno ficou em EXAME! \n Qual a nota do exame? \n', function (notaExameDois) {
                                                            exame = calcularMedia.mediaExame(resultado, notaExameDois)

                                                            if (exame == '') {
                                                                console.log('ERRO: a nota de exame precisa ser preenchida')
                                                            } else if (exame <= 59) {
                                                                console.log(aluno + ' ficou em [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' +
                                                                    'Curso: xxxxxxxx \n' +
                                                                    professor + '\n' +
                                                                    'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.\n' +
                                                                    'Média Final: ' + resultado + '\n' +
                                                                    'Média Final Do Exame: ' + exame + '\n' +
                                                                    'O Aluno foi reprovado'
                                                                )
                                                            } else {
                                                                console.log(aluno + ' ficou em [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' +
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
                                                        console.log(aluno + ' ficou em [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' +
                                                            'Curso: xxxxxxxx \n' +
                                                            professor + '\n' +
                                                            'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.' +
                                                            ' Média Final: ' + resultado + ' \n' +
                                                            'Aluno Aprovado!'
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
        }

        

    })










































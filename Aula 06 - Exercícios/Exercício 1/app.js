var readline = require('readline')

var calcularMedia = require('./modulo/media.js')
var validacaoProfessor = require('./modulo/nome_professor.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('valor: \n', function(valor1){
    let nota1 = valor1

    entradaDados.question('valor2: \n', function(valor2){
        let nota2 = valor2

        entradaDados.question('valor3: \n', function(valor3){
            let nota3 = valor3

            entradaDados.question('valor4: \n', function(valor4){
                let nota4 = valor4

              entradaDados.question('nome do professor: ', function(nomeDoProfessor){
                let nomeProfessor = nomeDoProfessor

                let resultado = calcularMedia.calculadoraDeMedia(nota1, nota2, nota3, nota4)
                let statusDoAluno = calcularMedia.checagemDeStatus(resultado)
                let professor = validacaoProfessor.checagemDeNomeDoProfessor(nomeProfessor)

                if (resultado == false) {
                    console.log('Erro!')
                } else {
                    console.log('O aluno [ xxxxxx ] foi [ ' + statusDoAluno + ' ] na disciplina [ xxxxxxxx ] \n' + 
                    'Curso: xxxxxxxx \n' +
                    'Professor: \n' + professor +
                    'Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + '.' +
                    ' Média Final: ' + resultado
                    )
                }

              })


            })
        } )
    })


})
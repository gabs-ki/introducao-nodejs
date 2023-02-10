/****************************************************************************************
 * Objetivo: 1º Tirar a média do aluno
 * 
 * 
 * 
 * 
 ***************************************************************************************/

const calculadoraDeMedia = function(numero1, numero2, numero3, numero4){
    let nota1 = String(numero1).replace(',', '.')
    let nota2 = String(numero2).replace(',', '.')
    let nota3 = String(numero3).replace(',', '.')
    let nota4 = String(numero4).replace(',', '.')
    let resultado


    let status = true

    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('você precisa digitar algo')
        status = false
        return status
    } else {
        resultado = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        console.log(nota1 + ' ' + nota2 + ' ' + nota3 + ' ' + nota4 + ' e ' + resultado )
        
    } return resultado


}

const checagemDeStatus = function(resultado) {
    let mediaDoAluno = Number(resultado)
    let status = true
    let aprovado
    let reprovado
    let exame

    if(mediaDoAluno >= 70) {
        aprovado = 'Aprovado'
        return aprovado
    } else if (mediaDoAluno <= 69 && mediaDoAluno >= 51) {
        exame = 'Exame'
        return exame
    } else if (mediaDoAluno <= 50) {
        reprovado = 'Reprovado'
        return reprovado
    } else {
        
    }

}

module.exports = {
    calculadoraDeMedia, checagemDeStatus
}



const checagemDeNomeDoProfessor = function(professor, genero) {
    let nomeProfessorDois = String(professor)
    let generoDoProfessor = String(genero).toUpperCase()
    let status = true

    if (nomeProfessorDois == '' || generoDoProfessor == '') {
        console.log('O Nome do Professor não pode ficar vazio! ')
        status = false
        return status
    } else if (nomeProfessorDois.length <= 3) {
        console.log('Digite um nome válido! ')
        status = false
        return status
    } else if (generoDoProfessor == 'M') {
        let professorMasculino = 'Professor: ' + nomeProfessorDois
        return professorMasculino
    } else if (generoDoProfessor == 'F') {
        let professorFeminino = 'Professora: ' + nomeProfessorDois
        return professorFeminino
    } else if (nomeProfessorDois === Number || generoDoProfessor === Number) {
        console.log('Digite uma palavra válida!')
        status = false
        return status
    } else {
        status = false
        return status
    }

}

const checagemDeNomeDoAluno = function(aluno, genero) {
    let nomeAluno = String(aluno)
    let generoDoAluno = String(genero).toUpperCase()
    let status = true

    if (nomeAluno == '' || generoDoAluno == '') {
        console.log('O Nome do Aluno não pode ficar vazio!')
        status = false
        return status
    } else if (nomeAluno.length <= 3) {
        console.log('Digite um nome válido! ')
        status = false
        return status
    } else if (generoDoAluno == "M") {
        let alunoMasculino = "Aluno: " + nomeAluno
        return alunoMasculino
    } else if (generoDoAluno == 'F') {
        let alunaFeminino = "Aluna: " + nomeAluno
        return alunaFeminino
    } else if (nomeAluno === Number || generoDoAluno === Number) {
        console.log('Digite uma palavra válida!')
        status = false
        return status
    } else {
        status = false
        return status
    }

}

const checagemDoCurso = function (curso) {
    let cursoDoAluno = curso

}

module.exports = {
    checagemDeNomeDoProfessor, checagemDeNomeDoAluno
}
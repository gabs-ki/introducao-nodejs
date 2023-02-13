


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
    } else {
        status = false
        return status
    }

}

module.exports = {
    checagemDeNomeDoProfessor
}
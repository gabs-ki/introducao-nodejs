/************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 2023-04-14
 * Autor: Kian
 * Versão: 1.0
************************************************************************************/

 var alunoDAO = require('../model/DAO/alunoDAO.js')

//Insert a new student
const inserirNovoAluno = (dadosDoAluno) => {

}

//Update an existing student 
const atualizarAluno = (dadosDoAluno) => {

}

//Delete a student
const deletarAluno = (id) => {

}

//Return a list of all students
const getAlunos = async ()  => {

    let dadosAlunosJSON = {}
    
    //Import do arquivo DAO para acessar dados do aluno no banco de dados
    
    //Chama a função do arquivo DAO que irá retornar todos os registros do banco de dados
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if(dadosAluno){
        //Criando um JSON com o atributo alunos, para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else
        return false


}

//Return a student by ID
const getBuscarAlunoID = async (id) => {

    let idAluno = id
    
    let dadosAlunosJSON = {}

    if (isNaN(idAluno)) {
        return false
    } else {
        let dadosAlunoId = await alunoDAO.selectByIdAluno(idAluno)

        if (idAluno.length != 0 && dadosAlunoId) {
            dadosAlunosJSON.quantidade = dadosAlunoId.length
            dadosAlunosJSON.alunos = dadosAlunoId
            return dadosAlunosJSON
        } else 
            return false
    }
    
}

module.exports = {
    getAlunos,
    getBuscarAlunoID
}
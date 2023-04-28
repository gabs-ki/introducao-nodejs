/************************************************************************************
 * Objetivo: Responsável pela regra de negócio referente ao CRUD de ALUNOS
 * Data: 2023-04-14
 * Autor: Kian
 * Versão: 1.0
************************************************************************************/

//Import do arquivo de configuração das váriaveis, constantes e funções globais
var message = require('./modulo/config.js')

const { response } = require('express')

var alunoDAO = require('../model/DAO/alunoDAO.js')

//Insert a new student
const inserirNovoAluno = async (dadosDoAluno) => {

    //Validação para tratar os campos obrigatórios e quantidade de de caracteres
    if(dadosDoAluno.nome == ''              || dadosDoAluno.nome == undefined               || dadosDoAluno.nome.length > 100               ||
       dadosDoAluno.rg == ''                || dadosDoAluno.rg == undefined                 || dadosDoAluno.rg.length > 15                  ||
       dadosDoAluno.cpf == ''               || dadosDoAluno.cpf == undefined                || dadosDoAluno.cpf.length > 18                 ||
       dadosDoAluno.data_nascimento == ''   || dadosDoAluno.data_nascimento == undefined    || dadosDoAluno.data_nascimento.length > 10     ||
       dadosDoAluno.email == ''             || dadosDoAluno.email == undefined              || dadosDoAluno.email.length > 200
    ){
        
        return message.ERROR_REQUIRED_FIELDS //Status code 400

    } else {

        //Envia os dados para a Model inserir no Banco de Dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosDoAluno)

        //Verifica se o BD inseriu corretamente os dados
        if(resultDadosAluno)
            return message.SUCCESS_CREATED_ITEM //Status code 201
        else 
            return message.ERROR_INTERNAL_SERVER //Status code 500
    }

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

//Return a student by Nome
const getBuscarAlunoNome = async (nome) => {

    let nomeAluno = nome
    
    let dadosAlunosJSON = {}

    if (!isNaN(nomeAluno)) {
        return false
    } else {
        let dadosAlunoNome = await alunoDAO.selectByNameAluno(nomeAluno)

        if (nomeAluno.length != 0 && dadosAlunoNome) {
            dadosAlunosJSON.quantidade = dadosAlunoNome.length
            dadosAlunosJSON.alunos = dadosAlunoNome
            return dadosAlunosJSON
        } else 
            return false
    }
    
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
    getBuscarAlunoID,
    inserirNovoAluno,
    getBuscarAlunoNome
}
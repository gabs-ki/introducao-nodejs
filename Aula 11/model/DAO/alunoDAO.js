/************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 2023-04-14
 * Autor: Kian
 * Versão: 1.0
************************************************************************************/

 //Import da biblioteca do prisma client
 var {PrismaClient} = require('@prisma/client')

//Inserir dados do aluno no Banco de Dados
const insertAluno = (dadosDoAluno) => {
    
}

//Atualizar dados do aluno no Banco de Dados
const updateAluno = (dadosDoAluno) => {
    
}

//Deletar dados do aluno no Banco de Dados
const deleteAluno = (id) => {
    
}

//Retornar todos os aluno do Banco de Dados
const selectAllAlunos = async () => { 
    
    //Instância da classe PrismaClient
    let prisma = new PrismaClient()

    //ScripSQL para buscar todos os itens no banco de dados
    let sql = 'select * from tbl_aluno'

    //Duas formas que rodar o scrip o no banco
    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') - Permite interpretrar o scriptSQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)
    //rs = result set

    //Valida se o banco de dados retornou algum registro
    if(rsAluno.length > 0 ){
        return rsAluno
    } else {
        return false
    }

}

//Retornar o aluno filtrando pelo ID
const selectByIdAluno = async (id) => {

    let idAluno = id
    
    let prisma = new PrismaClient()

    let sql = 'select * from tbl_aluno where id = ' + idAluno

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno
}
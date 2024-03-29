/************************************************************************************
 * Objetivo: Responsável pela manipulação de dados dos ALUNOS no Banco de Dados
 * Data: 2023-04-14
 * Autor: Kian
 * Versão: 1.0
************************************************************************************/

//Import da biblioteca do prisma client
var {PrismaClient} = require('@prisma/client')

//Instância da classe PrismaClient
var prisma = new PrismaClient()

//Inserir dados do aluno no Banco de Dados
const insertAluno = async (dadosDoAluno) => {

    //ScriptSQL para inserir dados
    let sql = `insert into tbl_aluno (
        nome,
        rg,
        cpf,
        data_nascimento,
        email
        ) values (
        '${dadosDoAluno.nome}',
        '${dadosDoAluno.rg}',
        '${dadosDoAluno.cpf}',
        '${dadosDoAluno.data_nascimento}',
        '${dadosDoAluno.email}'
        )`



    //Executa o scriptSQL no B
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else
        return false
    
}

//Atualizar dados do aluno no Banco de Dados
const updateAluno = async (dadosDoAluno) => {

    //ScriptSQL para atualizar os dados no BD
    let sql = ` update tbl_aluno set
                    nome = '${dadosDoAluno.nome}',
                    rg = '${dadosDoAluno.rg}',
                    cpf = '${dadosDoAluno.cpf}',
                    data_nascimento = '${dadosDoAluno.data_nascimento}',
                    email = '${dadosDoAluno.email}'
                where id = ${dadosDoAluno.id}
              `
    //Executa o script no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else
        return false
}

//Deletar dados do aluno no Banco de Dados
const deleteAluno = async (id) => {

    let sql = ` delete from tbl_aluno where id = ${id}`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else
        return false
}

//Retornar todos os aluno do Banco de Dados
const selectAllAlunos = async () => { 
    

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

//Retornar o aluno filtrando pelo Nome
const selectByNameAluno = async (name) => {

    let nameAluno = name
    
    let prisma = new PrismaClient()

    let sql = `select * from tbl_aluno where nome like '%${nameAluno}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0) {
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
    selectByIdAluno,
    insertAluno,
    selectByNameAluno,
    updateAluno,
    deleteAluno
}
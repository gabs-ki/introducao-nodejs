/************************************************************************************
 * Objetivo: API para integraçõ entre Back e Banco de Dados (GET, POST, PUT, DELETE)
 * Data: 2023-04-14
 * Autor: Kian
 * Versão: 1.0
************************************************************************************/

const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const app = express()

app.use((request, response, next) => {

    //Define quem poderá acessar acessar a API (* - Todos)
    response.header('Access-Control-Allow-Origin', '*' )

    //Define quais métodos serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao cors
    app.use(cors())

    next()

})


//CRUD (Create, Read, Update e Delete)

/***************************************************************************************
* Objetivo: API de controle de alunos 
* Data: 2023-04-14
* Autor: Kian
* Versão: 1.0
************************************************************************************/

    //Obrigatório ter esses 2 Endpoints em todo projeto

    //EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async, function(request, response) {

    })


    //EndPoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async, function(request, response) {

    })

    //EndPoint: Insere um dado novo
    app.post('/v1/lion-school/aluno', cors(), async, function(request, response) {

    })

    //EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async, function(request, response) {

    })

    //EndPoint: Exclui um aluno existente, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async, function(request, response) {

    })

    app.listen(8080, () => {
        console.log('Servidor aguardando requisições')
    })
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

    //Depois de instalar o Express e os arquivos da API,
    // precisamos instalar o PRISMA(Biblioteca para estabelecer a 
    //  conexão do banco, depois instalar o PRISMA CLIENT)

    /*********************************- PRISMA -**********************************
     *                              
     * Prisma é uma bibliote para conexão com o banco de dados
     * PRISMA - npm install prisma --save
     * 
     * npx prisma - checa se está instalado
     * 
     * npx prisma init - para iniciar o prisma e criar os arquivos necessários
     * 
     * npm install @prisma/client --save = para instalar o client do prisma
     * 
     * npx prisma migrate dev #### Serve para realizar o sincronismo entre o prisma e o BD
    ***************************************************************************/

    //Define que os dados que irão chegar para o Body da requisição será no padrão JSON
    const bodyParserJson = bodyParser.json()

    //Recebe os dados da controller do aluno
    let dadosAluno = controllerAluno
    var message = require('./controller/modulo/config.js')

    //Import do arquivo da controller que irá solicitar os dados do Banco de dados
    var controllerAluno = require('./controller/controller_aluno.js')

    //Obrigatório ter esses 2 Endpoints em todo projeto

    //EndPoint: Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function(request, response) {

        let nomeAluno = request.query.nome
       
        
        let dadosAluno = await controllerAluno.getAlunos()
        
        
        if(nomeAluno == '' || nomeAluno == undefined){
            if (dadosAluno){
                
                response.json(dadosAluno)
                response.status(200)
            } else {
                
                response.status(404)
                response.json()
            }
        } else {
            let dadosAlunoNome = await controllerAluno.getBuscarAlunoNome(nomeAluno)

            if(dadosAlunoNome){
                
                response.json(dadosAlunoNome)
                response.status(200)
            } else {
                
                response.status(404)
                response.json()
            }
        }
    
        //Valida se existe registros de alunos
        

    })

    //EndPoint: Retorna o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response) {
    
        let idAluno = request.params.id
        

        let dadosAlunoId = await controllerAluno.getBuscarAlunoID(idAluno)
       

        if (dadosAlunoId == false) {
           response.status(404)
           response.json()
        } else {
            response.json(dadosAlunoId)
            response.status(200)
        }

        
    })

    //EndPoint: Insere um dado novo
    app.post('/v1/lion-school/aluno', cors(), bodyParserJson, async function(request, response) {

        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body
        
        let resultDadosAluno = await controllerAluno.inserirNovoAluno(dadosBody)
        
        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)


    })

    //EndPoint: Atualiza um aluno existente, filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJson, async function(request, response) {
            

        let contentType = request.headers['content-type']

        //Validação para receber dados apenas no formato JSON
        if(String(contentType).toLowerCase() == 'application/json'){
            //Recebe o ID do aluno pelo <Parâmetro>
            let idAluno = request.params.id
            
            //Recebe os dados do aluno encaminhado no corpo da requisição
            let dadosBody = request.body

            //Encaminha os dados para a controller
            let resultDadosAluno = await controllerAluno.updateAluno(dadosBody, idAluno)

            //
            response.status(resultDadosAluno.status)
            response.json(resultDadosAluno)
        } else {

            response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
            response.json(message.ERROR_INVALID_CONTENT_TYPE)
        }


    })

    //EndPoint: Exclui um aluno existente, filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response) {

        let idAluno = request.params.id

        let dadosAlunoSelectId = await controllerAluno.getBuscarAlunoID(idAluno)
        
        
        if(dadosAlunoSelectId.status == 404) {

            response.status(message.ERROR_ID_NOT_FOUND.status)
            response.json(message.ERROR_ID_NOT_FOUND)

        } else {
            

            let dadosAlunoId = await controllerAluno.deletarAluno(idAluno)

            
            if (dadosAlunoId == false) {
                response.status(dadosAlunoId.status)
                response.json(dadosAlunoId)
            } else {
                response.status(dadosAlunoId.status)
                response.json(dadosAlunoId)
            }
        }

        

    })

    app.listen(8080, () => {
        console.log('Servidor aguardando requisições')
    })
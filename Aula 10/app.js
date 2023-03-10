/**************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de Estados e Cidades
 * Autor: Kian
 * Data: 10-03-2023
 * Versão 1.0
***************************************************************************/

/**
 * Express - dependência para realizar requisições de API pelo protocolo HTTP
 *      
 *      npm install express --save
 *      npm i = baixa todas as dependências de novo, o npm vai  
 *                  ler o package.json para baixar tudo de novo
 * 
 * Cors - dependência para gerenciar permissões de requisição da API
 *      
 *      npm install cors --save
 * 
 * Body-Parser - depedência que gerencia o corpo das requisições
 *      
 *      npm install body-parser --save
 * 
 */


//Import das dependências do projeto

//Dependência para cirar as requisições da API
const express = require('express')

//Dependência para gerenciar as permissões da API
const cors = require('cors')

//Dependência para gerenciar o corpo das requisições da API
const bodyParser = require('body-parser')

//Cria um objeto com as características do express
const app = express()

app.use((request, response, next) => {

    //API publica - fica disponível para utliização de qualquer aplicação
    //API privada - somente o IP informado poderá consumir dados da API
        
    //Define se a API será pública ou privada
    response.header('Access-Control-Allow-Origin', '*' /*No lugar do asterísco você pode colocar um ip para tonrar a API privada*/ )

    //Permite definir quais metodos poderão ser utilizadas nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()

})

//EndPoints
    //async - estabelece um status de aguarde, assim que eu processar, te devolvo os dados
        //obs: se não usar o asyn, a requisição é perdida pois o front acha que a API está do ar

    //Endpoint para listar todos os estados
app.get('/estados', cors(), async function(request, response, next){
    const estadosCidades = require('./modulo/modulo.js')
    let estados = estadosCidades.getListaDeEstados()
    response.status(200)
    response.json(estados)
})

//
app.listen(8080, function(){
    console.log('Servidor aguardando requisições na porta 8080.')
})
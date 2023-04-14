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

//Import do arquivo no modulo (funções)
const estadosCidades = require('./modulo/modulo.js')

//Cria um objeto com as características do express
const app = express()

app.use((request, response, next) => {

    //API publica - fica disponível para utliização de qualquer aplicação
    //API privada - somente o IP informado poderá consumir dados da API

    //Define se a API será pública ou privada
    response.header('Access-Control-Allow-Origin', '*' /*No lugar do asterísco você pode colocar um ip para tonrar a API privada*/)

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
app.get('/v1/senai/estados', cors(), async function (request, response, next) {



    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        response.status(200)
        response.json(estados)
    } else {
        response.status(500)
    }


})

//EndPoint: Listar os dados do estado filtrando pela sigla do estado
// Sempre colocar nome(/sigla/) no filtro(/:uf/ - /:uf-estado/) que eu vou fazer

app.get('/v1/senai/estado/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstado = {}

    //Recebe a sigla do estado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado.length != 2 || !isNaN(siglaEstado) || siglaEstado == undefined || siglaEstado == '') {

        statusCode = 400

        dadosEstado.message = 'Não foi possível acessar os dados de entrada (uf) que foi enviado, pois não corresponde ao exigido, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter duas letras'

    } else {
        //Chama a função para retornar os dados do contato
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

//EndPoint: podemos versionar os nossos endpoints para nos devolver dados adicionais ou diferentes,
//  como dar acesso restrito a usuários que pagam a api
app.get('/v2/senai/estado/sigla/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstado = {}

    //Recebe a sigla do estado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado.length != 2 || !isNaN(siglaEstado) || siglaEstado == undefined || siglaEstado == '') {

        statusCode = 400

        dadosEstado.message = 'Não foi possível acessar os dados de entrada (uf) que foi enviado, pois não corresponde ao exigido, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter duas letras'

    } else {
        //Chama a função para retornar os dados do contato
        let estado = estadosCidades.getDadosEstado(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/v1/senai/estado/capital/:uf', cors(), async function (request, response, next) {

    let statusCode
    let dadosEstado = {}

    let siglaCapital = request.params.uf

    if (siglaCapital.length != 2 || !isNaN(siglaCapital) || siglaCapital == undefined || siglaCapital == '') {

        statusCode = 400

        dadosEstado.message = 'Não foi possível acessar os dados de entrada (uf) que foi enviado, pois não corresponde ao exigido, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter duas letras'
    } else {

        let capital = estadosCidades.getCapitalEstado(siglaCapital)

        if (capital) {
            statusCode = 200
            dadosEstado = capital
        } else {
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosEstado)
})

app.get('/v1/senai/estado/regiao/:regiao', cors(), async function (request, response, next) {
    let statusCode
    let dadosRegiao = {}

    let nomeRegiao = request.params.regiao

    if (!isNaN(nomeRegiao) || nomeRegiao == undefined || nomeRegiao == '') {
        statusCode = 400

        dadosRegiao.message = 'Não foi possível acessar os dados de entrada (uf) que foi enviado, pois não corresponde ao exigido, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter duas letras'

    } else {

        let regiao = estadosCidades.getEstadosRegiao(nomeRegiao)

        if (regiao) {
            statusCode = 200
            dadosRegiao = regiao
        } else {
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosRegiao)
})

app.get('/v1/senai/pais/capital/', cors(), async function (request, response, next) {


    let statusCode
    let dadosCapital = {}



    let capital = estadosCidades.getCapitalPais()

    if (capital) {
        statusCode = 200
        dadosCapital = capital
    } else {
        statusCode = 404
    }

    response.status(statusCode)
    response.json(dadosCapital)
})

// Filtro
//  Organização da nomenclatura do end-point
//  (/cidades/estado/sigla/:uf)
//  É correto sempre manter o nome do projeto ou o nome da empresa no 
//  inicio do filtro/url
app.get('/v1/senai/estado/cidades/:uf', cors(), async function(request, response, next){

    let statusCode
    let dadosCidades = {}
    let siglaCidade = request.params.uf

    

    if (siglaCidade.length != 2 || !isNaN(siglaCidade) || siglaCidade == undefined || siglaCidade == '') {

        statusCode = 400

        dadosEstado.message = 'Não foi possível acessar os dados de entrada (uf) que foi enviado, pois não corresponde ao exigido, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter duas letras'
    } else {
        let cidades = estadosCidades.getCidades(siglaCidade)

        if(cidades) {
            statusCode = 200
            dadosCidades = cidades
        } else {
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosCidades)

})

// A partir de agora, vamos filtrar de forma diferente, para não deixar a url muito grande
//QUERY STRING - pesquisar
//Variáveis na url = '?' é um caractere curinga, tudo o que tem antes dele é a url do site,
//  o que vem após dele é a váriavel
// & comercial para concatenar
// (http://localhost:8080/v2/senai/cidades?uf=SP)
// é uma particularidade do protocolo HTTP
app.get('/v2/senai/cidades', cors(), async function(request, response, next){

    let statusCode
    let dadosCidades = {}


    /**
     * Existem 2 opções para receber variaveis para filtro:
     * params - permite receber variaveis na estrutura da utl criada no endPoint (enviar o id/Pk via params)
     *  utilizado para id(PK)
     * query ou queryString - permite receber uma ou muitas variaveis para realizar filtros avançados(enviar outros tipos de dados)
     */


    // Para receber variáveos cruas da url você utiliza o params
    let siglaCidade = request.params.uf

    //Recebe uma variavel encaminhada via QueryString
    // Para receber variáveos query da url você utiliza o query
    let siglaEstado = request.query.uf
    //let cepEstado = request.query.cep
    //let populacaoEstado = request.query.populacao

    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado.length != 2 || !isNaN(siglaEstado) || siglaEstado == undefined || siglaEstado == '') {

        statusCode = 400

        dadosCidades.message = 'Não foi possível acessar os dados de entrada (uf) que foi enviado, pois não corresponde ao exigido, confira o valor,  pois não pode ser vazio, precisa ser caracteres e ter duas letras'

    } else {
        //Chama a função para retornar os dados do contato
        let cidades = estadosCidades.getCidades(siglaEstado)

        if (cidades) {
            statusCode = 200
            dadosCidades = cidades
        } else {
            statusCode = 404
        }
    }

    //Retorna o codigo e o JSON
    response.status(statusCode)
    response.json(dadosCidades)

})

//Roda o serviço da API para ficar aguardando requisições
app.listen(8080, function () {
    console.log('Servidor aguardando requisições na porta 8080.')
})
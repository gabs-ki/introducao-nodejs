/*******************************************************************************************************************************
 * Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, FUNCOES, VARIAVEIS para o projeto(Escopo Global);
 * Data: 2023-04-28
 * Autor: Kian
 * Versão: 1.0
 ******************************************************************************************************************************/


/*************************** MENSAGENS DE ERRO ********************************************************************************/

const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}




/**************************** MENSAGENS DE SUCESSO ****************************************************************************/

const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}



module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER
}
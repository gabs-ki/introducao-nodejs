/*******************************************************************************************************************************
 * Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, FUNCOES, VARIAVEIS para o projeto(Escopo Global);
 * Data: 2023-04-28
 * Autor: Kian
 * Versão: 1.0
 ******************************************************************************************************************************/


/*************************** MENSAGENS DE ERRO ********************************************************************************/

const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos.'}
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}
const ERROR_INVALID_ID = {status: 400, message: 'O ID informado na requisição não é válido ou não foi encaminhado.'}
const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de mídia Content-type da solicitação não é compatível com o servidor. Tipo aceito: [application/json]'}
const ERROR_ID_NOT_FOUND = {status: 404, message: 'O ID informado não existe.'}


/**************************** MENSAGENS DE SUCESSO ****************************************************************************/

const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}
const SUCCESS_UPDATED_ITEM = {status: 200, message: 'Item atualizado com sucesso.'}
const SUCCESS_DELETED_ITEM = {status: 200, message: 'Item deletado com sucesso.'}


module.exports = {
    ERROR_REQUIRED_FIELDS,
    SUCCESS_CREATED_ITEM,
    ERROR_INTERNAL_SERVER,
    ERROR_INVALID_ID,
    SUCCESS_UPDATED_ITEM,
    ERROR_INVALID_CONTENT_TYPE,
    SUCCESS_DELETED_ITEM,
    ERROR_ID_NOT_FOUND
}
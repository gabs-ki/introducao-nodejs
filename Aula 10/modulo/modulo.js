

var listaCidade = require('./estados_cidades')

let listaEstadosBrasil = listaCidade.estadosCidades.estados

const getListaDeEstados = function () {

    let status = true
    let estadosJson = {}
    let estadosArray = []

    

    listaCidade.estadosCidades.estados.forEach(function (item) {
        estadosArray.push(item.sigla)
        estadosJson.uf = estadosArray
        estadosJson.quantidade = estadosArray.length
        
    })
    
    if (status) {
        return estadosJson
    } else {
        status = false
        return status
    }
    
}

const getDadosEstado = function (uf) {
    let ufEstado = uf.toUpperCase()
    let estadoJson = {}
    let status = true

    listaEstadosBrasil.forEach(function (descricaoEstado) {

        if (ufEstado == descricaoEstado.sigla.toUpperCase()) {
            estadoJson.uf = descricaoEstado.sigla
            estadoJson.descricao = descricaoEstado.nome
            estadoJson.capital = descricaoEstado.capital
            estadoJson.regiao = descricaoEstado.regiao

        } else {
            return false
        }

    })

    if (status) {
        return estadoJson
    } else {
        status = false
        return status
    }
}

const getCapitalEstado = function (uf) {
    let ufEstado = uf.toUpperCase()
    let capitaisJson = {}
    let status = true

    listaCidade.estadosCidades.estados.forEach(function (descricaoEstado) {

        if (ufEstado == descricaoEstado.sigla.toUpperCase()) {


            capitaisJson.uf = descricaoEstado.sigla
            capitaisJson.descricao = descricaoEstado.nome
            capitaisJson.capital = descricaoEstado.capital
        } else {
            return false
        }
    })

    if (status) {
        
        return capitaisJson
    } else {
        status = false
        return status
    }
}

const getEstadosRegiao = function (regiao) {
    let regiaoEstados = regiao.toUpperCase()
    let estadosJson = {}
    let ufJson = {}
    let estadosArray = []
    let status

    listaCidade.estadosCidades.estados.forEach(function (descricaoRegiao) {

        if (regiaoEstados == descricaoRegiao.regiao.toUpperCase()) {

            ufJson = {
                uf: descricaoRegiao.sigla,
                descricao: descricaoRegiao.nome
            }

            estadosArray.push(ufJson)

            estadosJson = {
                regiao: descricaoRegiao.regiao,
                estados: estadosArray
            }  
        } 
    })
    if (estadosJson == undefined) {
        status = false
    } else {
        status = estadosJson
    }
    return status

}

const getCapitalPais = function () {
    let capitalJson = {}
    let capitaisArray = []
    let listaJson = {}
    let status

    listaEstadosBrasil.forEach(function (capitalLista) {

        if (capitalLista.capital_pais != undefined) {
            capitalJson = {
                capital_atual: capitalLista.capital_pais.capital,
                uf: capitalLista.sigla,
                descricao: capitalLista.nome,
                capital: capitalLista.capital,
                regiao: capitalLista.regiao,
                capital_pais_ano_inicio: capitalLista.capital_pais.ano_inicio,
                capital_pais_ano_termino: capitalLista.capital_pais.ano_fim
            }
            capitaisArray.push(capitalJson)
            listaJson = {
                capitais: capitaisArray
            }
        }

    })
    if (capitaisArray == undefined) {
        status = false
    } else {
        status = listaJson
    }
    return status
}

const getCidades = function (sigla) {
    let siglaEstados = sigla.toUpperCase()
    let descricaoCidade = {}
    let listaCidades = []
    let status = true


    if (siglaEstados != undefined && siglaEstados != listaEstadosBrasil.sigla) {

        listaEstadosBrasil.forEach(function (estadosBrasil) {

            if (estadosBrasil.sigla.toUpperCase() == siglaEstados) {
                estadosBrasil.cidades.forEach(function (cidadesBrasil) {
                    listaCidades.push(cidadesBrasil.nome)
                })

                descricaoCidade = {
                    uf: estadosBrasil.sigla,
                    descricao: estadosBrasil.nome,
                    quantidade_cidades: estadosBrasil.cidades.length,
                    cidades: listaCidades
                }

            }
        })
        return descricaoCidade
    } 
    if (status) {
        return descricaoCidade
    } else {
        status = false
        return status
    }
}

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}
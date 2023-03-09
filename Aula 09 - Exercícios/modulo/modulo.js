

var listaCidade = require('../estados_cidades.js')

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
        return false
    }

}

const getDadosEstado = function (uf) {
    let ufEstado = uf.toUpperCase()
    let estadoJson = {}

    listaCidade.estadosCidades.estados.forEach(function (descricaoEstado) {

        if (ufEstado == descricaoEstado.sigla) {


            estadoJson.uf = descricaoEstado.sigla
            estadoJson.descricao = descricaoEstado.nome
            estadoJson.capital = descricaoEstado.capital
            estadoJson.regiao = descricaoEstado.regiao

        } else {
            return false
        }
    })
}


const getCapitalEstado = function (uf) {
    let ufEstado = uf.toUpperCase()
    let capitaisJson = {}

    listaCidade.estadosCidades.estados.forEach(function (descricaoEstado) {

        if (ufEstado == descricaoEstado.sigla) {


            capitaisJson.uf = descricaoEstado.sigla
            capitaisJson.descricao = descricaoEstado.nome
            capitaisJson.capital = descricaoEstado.capital


        } else {
            return false
        }
    })
}

const getEstadosRegiao = function (regiao) {
    let regiaoEstados = regiao.toUpperCase()
    let estadosJson = {}
    let ufJson = {}
    let estadosArray = []

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


        } else {

            return false
        }

    })

}

const getCapitalPais = function () {
    let capitalJson = {}
    let capitaisArray = []
    let listaJson = {}

    listaCidade.estadosCidades.estados.forEach(function (capitalLista) {

            capitalJson = {
                
                uf: capitalLista.sigla,
                descricao: capitalLista.nome,
                capital: capitalLista.capital,
                regiao: capitalLista.regiao,
                capital_pais_ano_inicio: capitalLista.capital_pais,
                capital_pais_ano_termino: capitalLista.capital_pais
            }
    })
    console.log(capitalJson)
}

getCapitalPais()
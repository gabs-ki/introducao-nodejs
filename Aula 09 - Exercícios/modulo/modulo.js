

var listaCidade = require('../estados_cidades.js')

const getListaDeEstados = function(){

    let status = true
    let estadosJson = {}
    let estadosArray = []

   
    listaCidade.estadosCidades.estados.forEach(function(item){
        estadosArray.push(item.sigla)
        estadosJson.uf = estadosArray
        estadosJson.quantidade = estadosArray.length
    })

    if(status) {
        return estadosJson
    } else {
        return false
    }
   
}

const getDadosEstado = function(uf) {
    let status
    let ufEstado = uf.toUpperCase()
    let estadoJson = {}
    
    
    listaCidade.estadosCidades.estados.forEach(function(descricaoEstado){
        
        if(ufEstado == descricaoEstado.sigla) {

            
            estadoJson.uf = descricaoEstado.sigla
            estadoJson.descricao = descricaoEstado.nome
            estadoJson.capital = descricaoEstado.capital
            estadoJson.regiao = descricaoEstado.regiao
            
        } else {
           return false
        }
        console.log(estadoJson)
        
    })

    
}

getDadosEstado('sp')










const geradorDeConta = function(valor1, valor2, maxTabuada) {
    let multiplicador = valor1
    let multiplicando = valor2
    //let minTab = minTabuada
    let maxTab = Number(maxTabuada)
    let contador = 0
    let status = true
    
    while (contador < multiplicador) {
        let conta = Number(multiplicador) * Number(multiplicando)
        console.log(multiplicador + ' X ' + multiplicando + ' = ' + conta )
        multiplicando++
        contador++
    }
}


geradorDeConta(5,2,7)
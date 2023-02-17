
const verificacaoPar = function(numeroMinPar, numeroMaxPar) {

    let minPar = Number(numeroMinPar)
    let maxPar = Number(numeroMaxPar)
    let contador = 0
    

    while (minPar <= maxPar) {
        if(minPar %2 == false){
            let resultado = '' + minPar
            console.log(resultado)
        } 
        minPar++
        contador++
        
        // resto = minPar % 2
        // quociente = minPar / 2

        // if (resto == 0) {
        //     console.log(minPar + ' é par')
        // } else {
        //     console.log(minPar + ' é impar')
        // }
        // minPar++
    } console.log('Número pares encontrados: ' + contador / 2)


}

const verificacaoImpar = function(numeroMinImpar, numeroMaxImpar) {

    let minImpar = Number(numeroMinImpar)
    let maxImpar = Number(numeroMaxImpar)
    let contador = 0

    while (minImpar <= maxImpar) {
        if (minImpar %2 == true) {
            let resultado = '' + minImpar
            console.log(resultado)
        }
        minImpar++
        contador++
    } console.log('Número ímpares encontrados: ' + contador / 2)


}

const verificacaoAmbas = function(numeroMin, numeroMax) {
    let minImpar = Number(numeroMin)
    let maxImpar = Number(numeroMax)
    let contador = 0

    while (minImpar <= maxImpar) {
        let resultado = '' + minImpar
       console.log(resultado)
        minImpar++
        contador++
    } console.log('Números encontrados: ' + contador)
}

module.exports = {
    verificacaoPar,verificacaoImpar, verificacaoAmbas
}
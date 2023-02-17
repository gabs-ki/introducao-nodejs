


const geradorDeConta = function(multiplicadorMin, multiplicadorMax,minTabuada, maxTabuada) {
    let multiplicador = multiplicadorMin
    let multiplicando = multiplicadorMax
   
    let maxTab = maxTabuada
    let minTab = minTabuada
    
    let status = true


    if (multiplicando == '' || multiplicador == '' || minTab == '' || maxTab == '') {
        console.log('Os valores não podem ficar vazios')
        status = false
    }else if(isNaN(multiplicando) || isNaN(multiplicador) || isNaN(minTab) || isNaN(maxTab)){
        console.log('Digite um número válido!')
        status = false  
    } else if (multiplicando < 1 || multiplicando > 50 || multiplicador < 1 || multiplicador > 50) {
        console.log('Digite um número válido, Entre 2 e 100')
        status = false
    } else if (multiplicando < multiplicador) {
        console.log('Multiplicando tem que ser maior que o minimo multiplicador')
        status = false
    } else if (maxTab < minTab) {
        console.log('A ultima tabuada tem que ser maior que a inicial')
        status = false
    } else if (minTab < 2 || maxTab > 100) {
        status = false
        console.log('A tabuada inicial tem que começar com no minimo 2 e a final deve ir até 200!')
    } else { 

        let minMultiplicador

        while (minTab <= maxTab) {

            console.log('Tabuada do: ' + minTab)
            minMultiplicador = Number(multiplicador)
    
            while (minMultiplicador <= multiplicando) {
                let conta = Number(minTab) * minMultiplicador
                console.log(minTab + ' X ' + minMultiplicador + ' = ' + conta )
                minMultiplicador++
            }
            minTab++
            console.log('********************')
        }
        return status

    }


    
    
    
}


module.exports = {
    geradorDeConta
}
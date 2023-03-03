/*************************************************************
 * Objetivo: Compreender o Array - Mistura com a aula 07
 * Data: 27-02-2023
 * Autor: Kian
 * Versão: 1.0
 *************************************************************/


const listaProdutos = ['Teclado', 'Mouse', 'Monitor', 'Gabinete', 'HD', 'Memória']

const listaNomes = ['Nami', 'Luffy', 'Zoro', 'Ace', 'Sanji', 'BarbaBranca', { nome: 'Jason', idade: 10 }]

const listagemProdutos = function () {

    //Forma nº1 de criar JSON e já atribuir chaves e valores
    // let listaProdutosJSON = {
    //     produtos : listaProdutos,
    //     clientes : listaNomes
    // }

    //Forma nº2 de criar um JSON, onde as chaves e valores são atribuídas no decorrer do projeto

    // let listProdutosJSON = {}

    // listProdutosJSON.produtos = listaProdutos

    // listProdutosJSON.clientes = listaNomes

    // //Extraindo valores JSON e ARRAY
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.produtos[5])

    let listProdutosJSON = {}

    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'DELL',
            valor: 1000,
            descricao: 'Monitor DELl...',
            codigo: 4304
        }, {
            nome: 'Monitor',
            quantidade: 280,
            marca: 'LG',
            valor: 1300,
            descricao: 'Monitor DELl...',
            codigo: 2702
        }, {
            nome: 'Teclado',
            quantidade: 800,
            marca: 'DELL',
            valor: 200,
            descricao: 'Teclado DELl...',
            codigo: 2804
        }, {
            nome: 'Teclado',
            quantidade: 360,
            marca: 'LG',
            valor: 230,
            descricao: 'Teclado LG...',
            codigo: 2780
        }, {
            nome: 'Mouse',
            quantidade: 120,
            marca: 'Razer',
            valor: 800,
            descricao: 'Mouse Razer...',
            codigo: 2750
        }, {
            nome: 'Monitor',
            quantidade: 1150,
            marca: 'Samsung',
            valor: 1200,
            descricao: 'Teclado Samsung...',
            codigo: 2354
        }, {
            nome: 'HeadSet',
            quantidade: 50,
            marca: 'Razer',
            valor: 750,
            descricao: 'HeadSet Razer...',
            codigo: 4783
        }
    ]

    //Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    let listCoresSamsungArray = ['Preto', 'Branco', 'Cinza']
    let listCoresRazerArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    //Arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', '5K', 'IPS']
    let listModelosTeclado = ['Mecãnico', 'Semi-Mecãnico', 'Membrana', 'Óptico']



    //Adiciona o ARRAY de produtos dentro de um JSON
    listProdutosJSON.produtos = listProdutosArray
    //Adicionar cores


    listProdutosJSON.produtos[0].cores = listCoresDellArray

    listProdutosJSON.produtos[1].cores = listCoresLgArray

    listProdutosJSON.produtos[2].cores = listCoresTecladoArray
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray

    listProdutosJSON.produtos[4].cores = listCoresMouseArray

    listProdutosJSON.produtos[5].cores = listCoresSamsungArray

    listProdutosJSON.produtos[6].cores = listCoresRazerArray

    //Adicionar Modelos de Monitor

    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor
    listProdutosJSON.produtos[5].modelos = listModelosMonitor

    //Adicionar Modelos de Monitor

    listProdutosJSON.produtos[2].modelos = listModelosTeclado
    listProdutosJSON.produtos[3].modelos = listModelosTeclado

    //


    // console.table(listProdutosJSON.produtos)

    // console.log('^^^^^^^^^^^^^^^^ |Relatório| ^^^^^^^^^^^^^^^^^^')
    // console.log('- Nome: ' + listProdutosJSON.produtos[1].nome)
    // console.log('- Marca: ' + listProdutosJSON.produtos[1].marca)
    // console.log('- Valor: ' + listProdutosJSON.produtos[1].valor)
    // console.log('- Cor: ' + listProdutosJSON.produtos[1].cores[1])
    // console.log('- Cor: ' + listProdutosJSON.produtos[1].modelos[1])
    // console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');


    //Percorre o array de produtos para listar 
    listProdutosJSON.produtos.forEach(function (itemProduto) {

        console.log('^^^^^^^^^^^^^^^^ |Relatório| ^^^^^^^^^^^^^^^^^^')
        console.log('- Nome: ' + itemProduto.nome)
        console.log('- Marca: ' + itemProduto.marca)
        console.log('- Valor: ' + itemProduto.valor)
        //  console.log('- Modelo: ' + listProdutosJSON.produtos[1].modelos[0] + ' M \n' + listProdutosJSON.produtos[1].modelos[1] )
        //  console.log('- Cor: ' + listProdutosJSON.produtos[1].cores[1])

        //Tratamento de erro para quando não existir array de cores
        if (itemProduto.cores != undefined) {
            //Percorre o array de cores que esta dentro do array de produtos(item)
            itemProduto.cores.forEach(function (itemCor) {
                console.log('Cor: ' + itemCor)
            })
        }

        //Tratamento de erro para quando não existir array de modelos
        if (itemProduto.modelos != undefined) {
            //Percorre o array de modelos que esta dentro do array de produtos(itemProduto)
            itemProduto.modelos.forEach(function (itemModelo) {
                console.log('Modelos: ' + itemModelo)
            })
        }

        // for(let contProdutos = 0; contProdutos<listProdutosJSON.produtos.length; contProdutos++) {
        //     console.log('^^^^^^^^^^^^^^^^ |Relatório| ^^^^^^^^^^^^^^^^^^')
        //     console.log('Nome: ' + listProdutosJSON.produtos[contProdutos].nome )
        //     console.log('Marca: ' + listProdutosJSON.produtos[contProdutos].marca )
        //     for(let contCores = 0; contCores < listProdutosJSON.produtos[contProdutos].cores.length; contCores++){
        //         console.log('Cores: ' + listProdutosJSON.produtos[contProdutos].cores[contCores])
        //     }
        // }

    });

}

listagemProdutos()
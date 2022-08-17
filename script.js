let caixa_decimal = document.querySelector('input#decimal')
let caixa_binario = document.querySelector('input#binario')


let valor_decimal =  Number(caixa_decimal.value)


function execucao(SistemaNumerico){

    if(SistemaNumerico == decimal){
        window.alert("Decimal")

    }

    if(SistemaNumerico == binario){


        let decimal_obtido = convercao_para_decimal()


        caixa_decimal.value = decimal_obtido
    }

}

function convercao_para_decimal(){

    let valor_binario =  Number(caixa_binario.value)

    let digitos = caixa_binario.value.length

    var decimal_obtido = 0

    while(digitos > 0){

        if( valor_binario % 10 > 0 ){
            window.alert("1")
            decimal_obtido += (2 ^ digitos)
            digitos --

            valor_binario = (valor_binario - 1)/10
        }else{

            decimal_obtido += (2 ^ digitos ) - 1
            digitos--

            valor_binario = valor_binario / 10
        }

    }

    return decimal_obtido
}


//**2^digitos-1

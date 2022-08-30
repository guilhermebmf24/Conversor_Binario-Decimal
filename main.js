
let caixa_decimal = document.querySelector('#decimal')
let caixa_binario = document.querySelector('#binario')


caixa_binario.addEventListener('keyup', ()=>{
    execucao(binario)
})

caixa_decimal.addEventListener('keyup', ()=>{
    execucao(decimal)
})

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

    let valor_binario = caixa_binario.value

    let digitos = caixa_binario.value.length

    var decimal_obtido = 0

    while(digitos > 0){

        if( valor_binario [0] == 1){

            decimal_obtido += 2 ** (digitos - 1)
            digitos --

            valor_binario = valor_binario.substring(1)

        }else{
            digitos--

            valor_binario = valor_binario.substring(1)
        }

    }

    return decimal_obtido
}


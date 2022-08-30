const caixa_decimal = document.querySelector('#decimal')
const caixa_binario = document.querySelector('#binario')

caixa_binario.addEventListener('keyup', ()=>{
    execucao(binario)
})
caixa_decimal.addEventListener('keyup', ()=>{
    execucao(decimal)
})

function execucao(SistemaNumerico){
    if(SistemaNumerico == decimal){
        caixa_binario.value = convercao_para_binario()
    }
    if(SistemaNumerico == binario){
        caixa_decimal.value = convercao_para_decimal()
    }
}

function convercao_para_decimal(){
    let valor_binario = caixa_binario.value
    let numero_de_digitos = valor_binario.length
    let decimal_obtido = 0

    for(numero_de_digitos; numero_de_digitos > 0; numero_de_digitos --){
        if( valor_binario [0] === '1'){
            decimal_obtido += 2 ** (numero_de_digitos - 1)
        }
    valor_binario = valor_binario.substring(1)  
    }
    return decimal_obtido
}

function convercao_para_binario(){
    let valor_numerico_decimal = Number(caixa_decimal.value)
    let binario_obtido = ''

    while(valor_numerico_decimal > 0){
        if(valor_numerico_decimal % 2 == 0){
            binario_obtido = 0 + binario_obtido
        }else{
            binario_obtido = 1 + binario_obtido
            valor_numerico_decimal -= 1
        }
        valor_numerico_decimal /= 2
    }
    return binario_obtido
}

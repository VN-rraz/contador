function calcular(){

var txinicio = document.querySelector('#textoinicio')
var txfim = document.querySelector('#textofim')
var txpasso = document.querySelector('#textopasso')

var res = document.getElementById('res')

    if(txinicio.value.length == 0 || txfim.value.length == 0 || txpasso.value.length == 0){
        res.innerHTML = 'Impossível contar.'
        alert('[ERRO] Preencha todos os campos.')
    }else{
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(txinicio.value)
        var fim = Number(txfim.value)
        var passo = Number(txpasso.value)
        if(passo <= 0){
            alert('Passo inválido, considerando passo = 1')
            passo = 1
        }

        if(inicio < fim){
            for(conta = inicio ;conta <= fim ;conta += passo){
                res.innerText += `${conta} \u{270C}`
      
            }
        }else{
            for(conta = inicio; conta >= fim;conta -= passo){
                res.innerHTML += `${conta} \u{270C}`
            }
        }
        res.innerHTML += `\u{270D}`
    }

}
function calcular(){
var texto = [document.querySelector('#textoinicio'), document.querySelector('#textofim'), document.querySelector('#textopasso')]
var res = document.getElementById('res')
    if(texto[0].value.length == 0 || texto[1].value.length == 0 || texto[2].value.length == 0){
        res.innerHTML = 'Impossível contar.'
        alert('[ERRO] Preencha todos os campos.')
    }else{
        res.innerHTML = 'Contando: <br>'
        var numero = [Number(texto[0].value), Number(texto[1].value), Number(texto[2].value)]
        if(numero[2] <= 0){
            alert('Passo inválido, considerando passo = 1')
            passo = 1
        }
        if(numero[0] < numero[1]){
            for(conta = numero[0] ;conta <= numero[1] ;conta += numero[2]){
                res.innerText += `${conta} \u{270C}`
            }
        }else{
            for(conta = numero[0]; conta >= numero[1];conta -= numero[2]){
                res.innerHTML += `${conta} \u{270C}`
            }
        }
        res.innerHTML += `\u{270D}`
    }
}
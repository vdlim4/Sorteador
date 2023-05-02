function sortear() {
    let txtn1 = document.querySelector('input.txtn1')
    let txtn2 = document.querySelector('input.txtn2')
    let res = document.querySelector('div.res')
    
    if (txtn1.value.length == 0 || txtn2.value.length == 0) {
        res.innerHTML = '<p>[ERRO] Insira os valores corretamente!</p>'
    } else if (Number(txtn1.value) >= Number(txtn2.value)) {
        res.innerHTML = '<p>[ERRO] Os valores foram inseridos incorretamente!</p>'
    } else {
        let n1 = Number(txtn1.value)
        let n2 = Number(txtn2.value)
        let numAleatorio = Math.floor((Math.random() * (n2 - n1 + 1)) + n1)
        let checkBox = document.querySelector('input.check')
        if(checkBox.checked) {
            let tempo = 6
            let contagem = setInterval(function() {
            tempo--
            res.innerHTML = `<p>${tempo}</p>`
            res.style.textAlign = 'center'
            if (tempo === 0) {
                clearInterval(contagem)
                res.innerHTML = `<p>O número sorteado foi: <strong>${numAleatorio}</strong>!</p>`
                }
            }, 1000)
        } else {
            res.innerHTML = `<p>O número sorteado foi: <strong>${numAleatorio}</strong>!</p>`
        }
    }
}
$(document).ready(function() {
    $("#altura").mask("0.00");
    $("#peso").mask("000");
})

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter')
        var btn = document.getElementById('calcular')
    btn.click()
})

function calculaImc() {
    const vNome = window.document.getElementById('nome').value
    const vAltura = window.document.getElementById('altura').value
    const vPeso = window.document.getElementById('peso').value
    const vResultado = window.document.getElementById('resultado')
    const valorIMC = Number(vPeso / (vAltura * vAltura)).toFixed(1)

    resultado.textContent = `${valorIMC}`

    if (vNome !== '' && altura !== '' && peso !== '') {

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }

        resultado.textContent = `${vNome}, seu IMC é ${valorIMC},  você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

window.document.getElementById('calcular').addEventListener('click', calculaImc)
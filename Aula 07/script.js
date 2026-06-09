let resultado = document.querySelector('#resultado')


function exibirNome(){
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let profissao = document.querySelector('#profissao').value
    return resultado.innerHTML = `Olá ${nome} ${sobrenome} você tem ${idade} anos e trabalha como ${profissao}`
}

function somar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valA + valB
}

function subtrair(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valA - valB
}

function multiplicar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valA * valB
}

function dividir(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    alert(valA / valB)
}
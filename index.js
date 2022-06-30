let fname = prompt("Qual seu nome?");

var pontos = 0
let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')
let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')
let q10 = document.querySelector('#q10')
let q11 = document.querySelector('#q11')
let q12 = document.querySelector('#q12')
let q13 = document.querySelector('#q13')
let q14 = document.querySelector('#q14')
let q15 = document.querySelector('#q15')
let q16 = document.querySelector('#q16')
let q17 = document.querySelector('#q17')
let q18 = document.querySelector('#q18')
let q19 = document.querySelector('#q19')
let q20 = document.querySelector('#q20')
let q21 = document.querySelector('#Q21')
let q22 = document.querySelector('#q22')
let q23 = document.querySelector('#q23')
let q24 = document.querySelector('#q24')
let q25 = document.querySelector('#q25')
let q26 = document.querySelector('#q26')
let q27 = document.querySelector('#q27')
let q28 = document.querySelector('#q28')
let q29 = document.querySelector('#q29')
let q30 = document.querySelector('#q30')
let botao = document.querySelector('#enviar')
botao.addEventListener('click', enviar)

function enviar(){
    if (q1.value == "opção 2") {
        pontos++
    }
    if (q2.value == "opção 3") {
       pontos++
    }    
    if (q3.value == "opção 3") {
        pontos++
    }
    if (q4.value == "opção 1") {
        pontos++
    }
    if (q5.value == "opção 3") {
        pontos++
    }
    if (q6.value == "opção 2") {
        pontos++
    }
    if (q7.value == "opção 1") {
        pontos++
    }
    if (q8.value == "opção 2") {
        pontos++
    }
    if (q9.value == "opção 1") {
        pontos++
    }
    if (q10.value == "opção 1") {
        pontos++
    }if (q11.value == "opção 4") {
        pontos++
    }
    if (q12.value == "opção 2") {
       pontos++
    }    
    if (q13.value == "opção 3") {
        pontos++
    }
    if (q14.value == "opção 1") {
        pontos++
    }
    if (q15.value == "opção 3") {
        pontos++
    }
    if (q16.value == "opção 4") {
        pontos++
    }
    if (q17.value == "opção 2") {
        pontos++
    }
    if (q18.value == "opção 2") {
        pontos++
    }
    if (q19.value == "opção 2") {
        pontos++
    }
    if (q20.value == "opção 1") {
        pontos++
    
    if (q21.value == "opção 2"){
            pontos++
    }
    }if (q22.value == "opção 4") {
        pontos++
    }
    if (q23.value == "opção 1") {
       pontos++
    }    
    if (q24.value == "opção 1") {
        pontos++
    }
    if (q25.value == "opção 3") {
        pontos++
    }
    if (q26.value == "opção 1") {
        pontos++
    }
    if (q27.value == "opção 2") {
        pontos++
    }
    if (q28.value == "opção 4") {
        pontos++
    }
    if (q29.value == "opção 4") {
        pontos++
    }
    if (q30.value == "opção 2") {
        pontos++
    }

    pontuacao.textContent = String(fname+", você tirou "+pontos+" pontos!");

    pontos=0
}
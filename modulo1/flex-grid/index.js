ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

numeroRepete = 0

for(let i = 0; i < arrayDeNumeros.length; i++) {
    if(arrayDeNumeros [i] === numeroEscolhido) {
        numeroRepete = numeroRepete + 1
    }
}
if(numeroRepete === 0) {
    return 'Número não encontrado'
}
return `O número ${numeroEscolhido} aparece ${numeroRepete}x`
}
ˋˋˋ
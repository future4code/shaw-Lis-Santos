ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    let salarioFixo = 2000
    let comissaoCarroVendido = qtdeCarrosVendidos * 100
    let comissaoTotalVendas = valorTotalVendas * 0.05
    let salarioFinal = salarioFixo + comissaoCarroVendido + comissaoTotalVendas
        return salarioFinal
}
ˋˋˋ
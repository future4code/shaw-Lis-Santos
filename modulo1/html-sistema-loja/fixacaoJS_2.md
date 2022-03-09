ˋˋˋ
function calculaPrecoTotal(quantidade) {
    if (quantidade < 12) {
      let custoTotal = quantidade * 1.30
      return custoTotal
  } else if (quantidade >= 12) {
      let custoTotal = quantidade * 1
      return custoTotal
  }
}
ˋˋˋ
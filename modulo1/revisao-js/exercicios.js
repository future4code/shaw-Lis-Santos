// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length 
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function comparar(a, b) {
    if(a > b) return 1
    if(a < b) return -1 
    return 0
    }
    return array.sort(comparar)
}

// EXERCÍCIO 04
function retornaNumerosPares (array) {
    let numerosPares = array.filter((numero) => {
        if(numero % 2 === 0) {
            return numero
        }
    })
    return numerosPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois (array) {

    let numerosPares = array.filter((numero) => {
        if(numero % 2 === 0) {
            return numero
        }
    })
    let numerosParesElevados = numerosPares.map((numero) => {
        return numero * numero 
    })
    return numerosParesElevados
} 
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
        for(i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero

    if(num1 > num2) {
        maiorNumero = num1
        menorNumero = num2
    } else {
        maiorNumero = num2
        menorNumero = num1
    } 

    let doisNumeros = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
        diferenca: maiorNumero - menorNumero
    }
    return doisNumeros 
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let primeirosNumerosPares = []
    for(let i = 0; primeirosNumerosPares.length < n; i++) {
        if(i % 2 === 0) {
            primeirosNumerosPares.push(i)
        }
    }
    return primeirosNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA === ladoB) && (ladoB === ladoC) && (ladoA === ladoC)) {
        return "Equilátero"
    } else if ((ladoA !== ladoB) && (ladoB !== ladoC) && (ladoA !== ladoC)) {
        return "Escaleno" 
    } else {
        return "Isósceles"
    }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    function comparar(a, b) {
        if(a > b) return 1
        if(a < b) return -1 
        return 0
    }

    array.sort(comparar)

    let segundoMaiorESegundoMenor = []
    segundoMaiorESegundoMenor.push(array[array.length - 2])
    segundoMaiorESegundoMenor.push(array[1])
    
    return segundoMaiorESegundoMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const atores = {
    ...filme,
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci."],
   }

   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores.atores}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let permissaoParaBrinquedo = pessoas.filter((indice) => {
        if((indice.altura >= 1.5) && (indice.idade > 14) && (indice.idade < 60)) {
            return indice
        }
    })
    return permissaoParaBrinquedo
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoPermissaoParaBrinquedo = pessoas.filter((indice) => {
        if(!((indice.altura >= 1.5) && (indice.idade > 14) && (indice.idade < 60))) {
            return indice
        }
    })
    return naoPermissaoParaBrinquedo
}
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for (let i = 0; i < contas.length; i++) {
        for(let c = 0; c < contas[i].compras.length; c++) {
            contas[i].saldoTotal = contas[i].saldoTotal - contas[i].compras[c]
        }
        contas[i].compras = []
    }
    return contas
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function ordenar (a,b) {
        if(a.nome < b.nome) {
            return -1
        } else {
            return true
        }
    }
   let retornarArrayAtualizado = consultas.sort(ordenar)
   return retornarArrayAtualizado
    }
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
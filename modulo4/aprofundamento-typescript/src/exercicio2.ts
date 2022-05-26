// 2.a e 2.b)

// Entradas: array de números
// Saída: maior número, menor número e média entre os dois.

function obterEstatisticas(numeros: number[]): Object {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 2]))


// 2.c) 
type amostra = {
    numeros: number[],
    obterEstatisticas: () => {
        estatisticas(numeros: number[]): object
    },
}
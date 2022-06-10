const sumTerminal = Number(process.argv[2]) + Number(process.argv[3])
console.log(`O resultado da soma é: ${sumTerminal}`)

const subTerminal = Number(process.argv[2] - process.argv[3])
console.log(`O resultado da subtração é: ${subTerminal}`)

const multTerminal = Number(process.argv[2] * process.argv[3])
console.log(`O resultado da multiplicação é: ${multTerminal}`)

const divTerminal = Number(process.argv[2] / process.argv[3])
console.log(`O resultado da divisão é: ${divTerminal}`)
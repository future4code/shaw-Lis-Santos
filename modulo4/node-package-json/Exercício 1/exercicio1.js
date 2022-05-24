// 1.a) process.argv

// 1.b) 

const nameTerminal = process.argv[2]
const ageTerminal = Number(process.argv[3])
const newAgeTerminal = Number(process.argv[4])
console.log(`Olá, ${nameTerminal}! Você tem ${ageTerminal} anos.`)

// 1.c)

console.log(`Olá, ${nameTerminal}! Você tem ${ageTerminal} anos. Em sete anos você terá ${newAgeTerminal} anos.`)
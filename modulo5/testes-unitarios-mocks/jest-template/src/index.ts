export interface Character {
    name: string
    life: number
    strength: number
    defense: number
}
export function validateCharacter(character: Character): boolean {
    if (!character.name ||
        character.life <= 0 ||
        character.strength <= 0 ||
        character.defense <= 0) {
        return false
    } else {
        return true
    }
}

// export function performAttack(attacker: Character, defender: Character) {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//         throw new Error("Invalid character")
//     }
//     if (attacker.strength > defender.defense) {
//         defender.life -= attacker.strength - defender.defense
//     }
// }

export function performAttack(
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean) {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character")
    }
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}

// 4.a. ValidadeCharacter. Para poder passar como parâmetro na função performAttack, e não ter que chamar uma função dentro da outra e com isso continuar podendo realizar testes unitários.
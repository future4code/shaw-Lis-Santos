import { Character, validateCharacter, performAttack } from "../src/index"

test("Verificando o comportamento da função com um personagem com o nome vazio", () => {
    const character1: Character = {
        name: "",
        life: 30,
        strength: 10,
        defense: 15
    }
    const result = validateCharacter(character1)
    expect(result).toBe(false)
})
test("Verificando o comportamento da função com um personagem com a vida igual a zero", () => {
    const character2: Character = {
        name: "Character",
        life: 0,
        strength: 10,
        defense: 15
    }
    const result = validateCharacter(character2)
    expect(result).toBe(false)
})
test("Verificando o comportamento da função com um personagem com a força igual a zero", () => {
    const character3: Character = {
        name: "Character",
        life: 16,
        strength: 0,
        defense: 15
    }
    const result = validateCharacter(character3)
    expect(result).toBe(false)
})
test("Verificando o comportamento da função com um personagem com a defesa igual a zero", () => {
    const character4: Character = {
        name: "Character",
        life: 16,
        strength: 10,
        defense: 0
    }
    const result = validateCharacter(character4)
    expect(result).toBe(false)
})
test("Verificando o comportamento da função com um personagem com a vida com o valor negativo", () => {
    const character5: Character = {
        name: "Character",
        life: -16,
        strength: -10,
        defense: -20
    }
    const result = validateCharacter(character5)
    expect(result).toBe(false)
})
test("Verificando o comportamento da função com um personagem com as informações validas", () => {
    const character6: Character = {
        name: "Character",
        life: 16,
        strength: 10,
        defense: 20
    }
    const result = validateCharacter(character6)
    expect(result).toBe(true)
})

test("Testando força de ataque", () => {
    const attacker: Character = {
        name: "Character",
        life: 1400,
        strength: 800,
        defense: 300
    }
    const defender: Character = {
        name: "Character",
        life: 1000,
        strength: 800,
        defense: 300
    }
    const attacker2: Character = {
        name: "Character",
        life: 550,
        strength: 600,
        defense: 200
    }
    const defender2: Character = {
        name: "Character",
        life: 1200,
        strength: 700,
        defense: 300
    }
    const validatorMock = jest.fn(() => {
        return true
    })
    const validatorMockError = jest.fn(() => {
        return false
    })
    performAttack(attacker, defender, validatorMock)
    expect(defender.life).toBe(500)
    expect(validatorMock).toBeCalled()
    expect(validatorMock).toBeCalledTimes(2)
    performAttack(attacker2, defender2, validatorMockError)
})
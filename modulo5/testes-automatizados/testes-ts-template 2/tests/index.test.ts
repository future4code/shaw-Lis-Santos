import { User, performPurchase } from "../src/index"

test("Testando o saldo maior que o valor de compra", () => {
    const user: User = {
        name: "Astrodev",
        balance: 100
    }
    const result = performPurchase(user, 40)

    expect(result).toEqual({
        name: "Astrodev",
        balance: 60
    })
})
test("Testando o saldo igual ao valor de compra", () => {
    const user: User = {
        name: "Astrodev",
        balance: 100
    }
    const result = performPurchase(user, 100)
    expect(result).toEqual({
        name: "Astrodev",
        balance: 0
    })
})
test("Testando o saldo menor que o valor de compra", () => {
    const user: User = {
        name: "Astrodev",
        balance: 100
    }
    const result = performPurchase(user, 120)
    expect(result).not.toBeDefined()
})
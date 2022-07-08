import { compare, genSalt, hash } from "bcryptjs"

// 1.b

export class HashManager {
    public hash = async (password: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPPT_COST)
        const salt = await genSalt(rounds)
        console.log(salt)
        const result = await hash(password, salt)
        return result
    }

    // 1.c
    public compare = async (password: string, hash: string): Promise<boolean> => {
        const result = await compare(password, hash)
        return result
    }
}
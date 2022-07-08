import { Request, Response } from "express";
import { characters } from "../data";

export function deleteCharacter(
    req: Request,
    res: Response
) {
    const id = Number(req.params.id)

    const index: number = characters.findIndex(
        character => character.id === id
    )
    if (index > -1) characters.splice(index, 1)

    // const character = characters.filter((character) => {
    //     if (character.id !== id) {
    //         return character
    //     }
    // })
    // res.status(200).send(character)
    res.status(200).end("Personagem deletado!")


}

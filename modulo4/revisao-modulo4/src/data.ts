import { movie, GENDER, character } from "./types";

export const movies: movie[] = [
    {
        id: 1,
        title: "X-men: O Filme",
        year: 2000
    },
    {
        id: 2,
        title: "Deadpool",
        year: 2016
    }
]

export let characters: character[] = [{
    id: 1,
    name: "Storm",
    gender: GENDER.FEMALE
}, {
    id: 2,
    name: "Deadpool",
    gender: GENDER.MALE, 
    description: "Sexy motherf***"
}, {
    id: 3,
    name: "Colossus",
    gender: GENDER.MALE
}
]
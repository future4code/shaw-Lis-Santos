// 3

enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

function organizedInformation(film: string, releaseYear: number, gender: GENERO, pointing?: number | string): object {
    return {
       film: film,
       releaseYear: releaseYear,
       gender: gender,
       pointing: pointing? pointing : "O filme não possui avaliação"
    }
}

console.log(organizedInformation("Um amor para recordar", 2002, GENERO.ROMANCE))
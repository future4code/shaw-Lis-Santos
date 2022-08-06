import { PlayBusiness } from "../src/business/PlayBusiness"
import { CompetitionDatabaseMock } from "./mocks/CompetitionDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGenerator"
import { PlayDataBaseMock } from "./mocks/PlayDatabaseMock"
import { play1, PlayFailure, PlaySuccessDTO } from "./mocks/PlayMock"
import { competition1, competition2, CompetitionFailureDTO, CompetitionSuccessDTO } from "./mocks/CompetitionMock"
import { CompetitionBusiness } from "../src/business/CompetitionBusiness"
import { AthleteBusiness } from "../src/business/AthleteBusiness"
import { AthleteDatabaseMock } from "./mocks/AthleteDatabaseMock"
import { athlete1, athlete2, AthleteFailureDTO, AthleteSuccessDTO } from "./mocks/AthleteMock"

const athleteBusinessMock = new AthleteBusiness(
    new AthleteDatabaseMock as any,
    new IdGeneratorMock
)

const playBusinessMock = new PlayBusiness(
    new PlayDataBaseMock() as any,
    new IdGeneratorMock() as any,
    new CompetitionDatabaseMock() as any
)
const competitionBusinessMock = new CompetitionBusiness(
    new CompetitionDatabaseMock() as any,
    new IdGeneratorMock()
)

describe("tests of competition, athlete and plays table", () => {
    test("Insert competition, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.createCompetition(CompetitionSuccessDTO)
            expect(result).toBe("Competição criada com sucesso!")
        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("Insert competition, failure", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.createCompetition(CompetitionFailureDTO)
        } catch (error: any) {
            expect(error.message).toBe("O status passado é inválido. Preencha com os valores de FINALIZADA, ACONTECENDO AGORA OU NÃO INICIALIZADA")
        }
    }) 
    test("Insert athlete, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await athleteBusinessMock.createAthlete(AthleteSuccessDTO)
            expect(result).toBe("Atleta adicionado com sucesso!")
        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("Insert Athlete, failure", async () => {
        expect.assertions(1)
        try {
           await athleteBusinessMock.createAthlete(AthleteFailureDTO)
        } catch (error: any) {
            expect(error.message).toBe("Insira corretamente a informação de 'name'")
        }
    })
    test("Sucess test getResultByIdCompetition", async () => {
        expect.assertions(1)
        try {
            const result = await playBusinessMock.getResultByIdCompetition("id_competition1")
            expect(result).toBe(play1)
        } catch (error: any) {
            console.log(error)
        }
    })
    test("getResultByIdCompetition, empty id_competition parameter", async () => {
        expect.assertions(1)
        try {
            await playBusinessMock.getResultByIdCompetition("")
        } catch (error: any) {
            expect(error.message).toBe("Insira uma competição com esse id")
        }
    })
    test("Sucess putCompetitionById", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.putCompetitionById("id_mock")
            expect(result).toBe("Status modificado!")
        } catch (error: any) {
            console.log(error)
        }
    })
    test("puCompetitionById, empty id_competition parameter", async () => {
        expect.assertions(1)
        try {
            await competitionBusinessMock.putCompetitionById("")
        } catch (error: any) {
            expect(error.message).toBe("Insira uma competição com esse id")
        }
    })
    test("Insert play, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await playBusinessMock.createPlay(PlaySuccessDTO)
            expect(result).toBe("Resultado cadastrado com sucesso!")
        } catch (error: any) {
            console.log(error)
        }
    })
    test("Insert play, failure", async () => {
        expect.assertions(1)
        try {
            await playBusinessMock.createPlay(PlayFailure)
        } catch (error: any) {
            expect(error.message).toBe("Essa unidade não é compatível com a competição")
        }
    })
    test("getAllCompetitions, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await competitionBusinessMock.getAllCompetitions()
            expect(result).toStrictEqual([competition1, competition2])
        } catch (error: any) {
            console.log(error)
        }
    })
    test("getAllAthletes, sucess", async () => {
        expect.assertions(1)
        try {
            const result = await athleteBusinessMock.getAllAthletes()
            expect(result).toStrictEqual([athlete1, athlete2])
        } catch (error: any) {
            console.log(error)
        }
    })

})
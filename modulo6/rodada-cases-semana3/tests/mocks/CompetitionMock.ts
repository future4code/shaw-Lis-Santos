import { Competition, CompetitionDTO } from "../../src/model/Competition"
import { COMPETITION } from "../../src/model/Competition"
import { STATUS } from "../../src/model/Competition"

export const competition1 = new Competition(
    "id_competition1",
    COMPETITION.DARDO,
    STATUS.FINALIZADA
)

export const competition2 = new Competition(
    "id_competition2",
    COMPETITION._100M,
    STATUS.ACONTECENDO_AGORA
)

export const CompetitionSuccessDTO: CompetitionDTO = {
    name: COMPETITION.DARDO,
    status: STATUS.ACONTECENDO_AGORA
}

export const CompetitionFailureDTO: CompetitionDTO = {
    name: COMPETITION._100M,
    status: "ativa" as STATUS
}
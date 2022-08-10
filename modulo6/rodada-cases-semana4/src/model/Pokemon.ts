export interface Pokemon {
    id: number,
    name: string,
    img_name: string,
    generation: number,
    evolution_stage: string | null,
    envolved: number,
    family_id: number | null,
    cross_gen: number,
    type1: string,
    type2: string | null,
    weather1: string,
    weather2: string | null,
    stat_total: number,
    atk: number,
    def: number,
    sta: number,
    legendary: number,
    aquireable: number,
    spawns: number,
    regional: number,
    radiable: number,
    hatchable: number,
    shiny: number,
    nest: number,
    new: number,
    not_gettable: number,
    future_evolve: number,
    full_cp_at_forty: number,
    full_cp_at_thirty_nine: number

}
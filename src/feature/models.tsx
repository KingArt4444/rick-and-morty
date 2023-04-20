interface PaginationInfo {
    count: number
    pages: number
    next: string
    prev: string
}

export interface Character {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: {
        name: string
        url: string
    }
    location: {
        name: string
        url: string
    }
    image: string
    episode: string[]
    url: string
    created: string
}

export interface CharacterModel extends Character{
  firstEpisode: Episode
}

export interface GetCharactersResponse {
    info: PaginationInfo
    results: CharacterModel[]
    currentCharacter: CharacterModel
}

export interface Episode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: string[]
    url: string
    created: string
}

export interface GetEpisodesResponse {
    info: PaginationInfo
    results: Episode[]
}
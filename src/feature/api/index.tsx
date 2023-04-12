import axios from "axios";
import { GetCharactersResponse } from "../models";

export const client = axios.create({
    baseURL:"https://rickandmortyapi.com/api"
})

export const charactersApi = {
    getCharacters(){
        return client.get<GetCharactersResponse>('/characters')
    }
}
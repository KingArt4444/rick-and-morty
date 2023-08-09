import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetCharactersResponse, Episode, CharacterModel } from "../models";
import { client } from '../api';
import { Dispatch } from 'redux'
import { cutBaseUrl } from '../../utils';

const initialState: GetCharactersResponse = {
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: '',
    },
    results: [{
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
            name: '',
            url: '',
        },
        location: {
            name: '',
            url: '',
        },
        image: '',
        episode: [],
        url: '',
        created: '',
        firstEpisode: {
            id: 0,
            name: '',
            air_date: '',
            episode: '',
            characters: [],
            url: '',
            created: '',
        },
    }],
    currentCharacter: {
        id: 0,
        name: '',
        status: '',
        species: '',
        type: '',
        gender: '',
        origin: {
            name: '',
            url: '',
        },
        location: {
            name: '',
            url: '',
        },
        image: '',
        episode: [],
        url: '',
        created: '',
        firstEpisode: {
            id: 0,
            name: '',
            air_date: '',
            episode: '',
            characters: [],
            url: '',
            created: '',
        },
    },
    isLoading: false,
    error: ''
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.info = action.payload.info
            state.results = action.payload.results
            state.error = action.payload.error
            state.isLoading = action.payload.isLoading
        },
        setCurrentCharacter: (state, action) => {
            state.currentCharacter = action.payload.data
            state.error = action.payload.error
            state.isLoading = action.payload.isLoading
        },
        setCharacterRequest: (state, action) =>{
            state.isLoading = action.payload
        },
        setCharacterFetchError: (state, action) =>{
            state.error = action.payload.error
            state.isLoading = action.payload.isLoading
        }
    },
})


export default characterSlice.reducer

export const { setCharacters, setCurrentCharacter, setCharacterRequest, setCharacterFetchError } = characterSlice.actions

export const fetchCharacters = (page: number, name: string) => async (dispatch: Dispatch) => {
    dispatch(setCharacterRequest(true))
    try {
        const result = await client.get<GetCharactersResponse>(`/character/?page=${page}&name=${name}`)

        const charactersInfo = result.data.info
        const dispatchResult = await Promise.all(result.data.results.map(async (char: CharacterModel) => {
            try {
                const episode = await client.get<Episode>(cutBaseUrl(char.episode[0]))
                return {
                    ...char,
                    firstEpisode: episode.data
                }
            }
            catch (error) {
                dispatch(setCharacterFetchError({error: "Oops! Something went wrong, please refresh the page", isLoading: false}))
                return console.error(error)
            }
        }))
        dispatch(setCharacters({ info: charactersInfo, results: dispatchResult, error: '', isLoading: false }))
    }
    catch (error) {
        dispatch(setCharacterFetchError({error: "Oops! Failed to find characters", isLoading: false}))
        return console.error(error)
    }
}

export const fetchCharacterById = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setCharacterRequest(true))
    try {
        const result = await client.get<CharacterModel>(`/character/${id}`)

        const characterInfo = result.data

        const episode = await client.get<Episode>(cutBaseUrl(characterInfo.episode[0]))
        const dispatchResult = {
            ...characterInfo,
            firstEpisode: episode.data
        }
        dispatch(setCurrentCharacter({ data: dispatchResult, error: '', isLoading: false }))
    }
    catch (error) {
        dispatch(setCharacterFetchError({error: "Oops! Something went wrong, please refresh the page", isLoading: false}))
        return console.error(error)
    }
}
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
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacters: (state, action) => {
            state.info = action.payload.info
            state.results = action.payload.results

            console.log(5, state.results)
        },
    },
})


export default characterSlice.reducer

export const { setCharacters } = characterSlice.actions

export const fetchCharacters = () => async (dispatch: Dispatch) => {
    try {
        const result = await client.get<GetCharactersResponse>('/character').then((res) => res.data)

        const charactersInfo = result.info
        const dispatchResult = await Promise.all(result.results.map(async (char: CharacterModel) => {
            let episode: Episode
            try {
                episode = await client.get<Episode>(cutBaseUrl(char.episode[0])).then((res) => res.data)
            }
            catch (error) {
                return console.error(error)
            }
            return {
                ...char,
                firstEpisode: episode
            }
        }))
        dispatch(setCharacters({info: charactersInfo, results: dispatchResult}))
    }
    catch (error){
        return console.error(error)
    }
}

//   export const getCharacters = createAsyncThunk('character/getCharacters', async () => {
    //     const response = await client.get<GetCharactersResponse>('/character').then((res => characterSlice.actions.setCharacters(res.data)))
    //     console.log(response)
    // })
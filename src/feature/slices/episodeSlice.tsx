import { createSlice } from '@reduxjs/toolkit'
import { GetEpisodesResponse } from "../models";
import { client } from '../api';
import { Dispatch } from 'redux'

const initialState: GetEpisodesResponse = {
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: '',
    },
    results: [],
}

export const episodeSlice = createSlice({
    name: 'episode',
    initialState,
    reducers: {
        setEpisodes: (state, action) => {
            state.info = action.payload.info
            state.results = action.payload.results
        },
    },
})

export default episodeSlice.reducer

export const { setEpisodes } = episodeSlice.actions

export const fetchEpisodes = () => async (dispatch: Dispatch) => {
    try {
        const result = await client.get<GetEpisodesResponse>('/episode')
            .then((res) => dispatch(setEpisodes(res.data)))
    }
    catch (error){
        return console.error(error)
    }
}
import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './slices/characterSlice'
import episodeReducer from './slices/episodeSlice'

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    episodes: episodeReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
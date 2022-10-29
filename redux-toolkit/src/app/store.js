import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../app/slices/counter/counterSlice.js'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
  },
})
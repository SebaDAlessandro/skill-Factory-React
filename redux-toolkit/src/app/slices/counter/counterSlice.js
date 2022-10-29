import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      //state.value += 1 // <--- instalado por defecto
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1
    },
    incrementByAmount: (state, action) => {
      state.counter += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions  //<--- instalado por defecto


//export default counterSlice.reducer <--- instalado por defecto: se puede borrar
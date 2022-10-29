import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/tasksSlice'
//import productsSlice from '../features/products/productsSlice'
//import animalsSlice from '../features/animals/animalsSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
/*     products: productsSlice,
    animals: animalsSlice, */
  },
})
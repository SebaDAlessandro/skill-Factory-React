import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: 'animal 1', description: 'description1'},
    {id: 2, title: 'animal 2', description: 'description2'},
    {id: 3, title: 'animal 3', description: 'description3'}
]

const animalsSlice = createSlice({

    //necesitamos: name, estado inicial, reducers = metodos o funciones para manejar los estados!
    name: 'animals',//mismo nombre en el store
    initialState,
    reducers:{
        //addAnimal
        //deletAnimal
        //updateAnimal
    },

})

//export const {addAnimal, deletAnimal, updateAnimal} = animalsSlice.actions
export default animalsSlice.reducer
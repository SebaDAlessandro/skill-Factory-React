import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: 'todo 1', description: 'description1'},
    {id: 2, title: 'todo 2', description: 'description2'},
    {id: 3, title: 'todo 3', description: 'description3'}
]

const tasksSlice = createSlice({

    //necesitamos: name, estado inicial, reducers = metodos o funciones para manejar los estados!
    name: 'tasks',
    initialState,
    reducers:{
        //addTasks
        //deletTask
        //updateTasck
    },

})

export default tasksSlice.reducer
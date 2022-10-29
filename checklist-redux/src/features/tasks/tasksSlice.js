import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const tasksSlice = createSlice({

    //necesitamos: name, estado inicial, reducers = metodos o funciones para manejar los estados!
    name: 'tasks',//mismo nombre en el store
    initialState,
    reducers:{
        addTasks:(state, action)=>{
            state.push(action.payload)
        },
        editTasck: (state, action)=>{
            const { id, titulo, descripcion } = action.payload
            const foundTask = state.find(task => task.id === id)
            if(foundTask){
                foundTask.titulo = titulo
                foundTask.descripcion = descripcion
            }
        },
        deleteTask: (state, action)=>{
            return state.filter(task => task.id !== action.payload)
        },
    },

})

export const {addTasks, deleteTask, editTasck} = tasksSlice.actions
export default tasksSlice.reducer
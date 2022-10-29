import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: 1, title: 'producto 1', description: 'description1'},
    {id: 2, title: 'producto 2', description: 'description2'},
    {id: 3, title: 'producto 3', description: 'description3'}
]

const productsSlice = createSlice({

    //necesitamos: name, estado inicial, reducers = metodos o funciones para manejar los estados!
    name: 'products',//mismo nombre en el store
    initialState,
    reducers:{
        //addProduct
        //deletProduct
        //updateProduct
    },

})

//export const {addProduct, deletProduct, updateProduct} = productsSlice.actions
export default productsSlice.reducer
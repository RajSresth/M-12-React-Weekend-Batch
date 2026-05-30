import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState :{
        items: []
    },
    reducers:{
        addItem: (state,action) => {},
        removeItem: () => {},
        clearCart: () => {}
    }
})


// action = { type:   , payload: }

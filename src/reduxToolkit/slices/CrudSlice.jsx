import { createSlice } from "@reduxjs/toolkit";

const initialState = {};



const crudSlice = createSlice({
    name: 'crud',
    initialState,
    reducers: {
        createPost : (state,action) => {

        }
    }
})

export const { createPost} = crudSlice.actions;
export default crudSlice.reducer;
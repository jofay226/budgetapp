import { configureStore } from "@reduxjs/toolkit";
import crudReducer from '../slices/CrudSlice';

export const store = configureStore({
    reducer: {
        crud: crudReducer
    }
})
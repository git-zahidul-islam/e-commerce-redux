import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const BASE_URL = 'http://localhost:3003/products'

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

export const productFetch = createAsyncThunk('products/productFetch',async()=>{
    const res = await axios.get(BASE_URL);
    return res.data;
})

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) =>{
        builder
        .addCase(productFetch.pending, (state) =>{
            state.isLoading = true,
            state.error = null
        })
        .addCase(productFetch.fulfilled, (state,action) =>{
            state.isLoading = false,
            state.products = action.payload
        })
        .addCase(productFetch.rejected, (state,action) =>{
            state.isLoading = false,
            state.error = action.error.message
        })
    }
});

export default productSlice.reducer;
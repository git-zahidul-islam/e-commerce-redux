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
export const deleteProducts = createAsyncThunk('products/deleteProducts',async(id)=>{
    await axios.delete(`${BASE_URL}/${id}`);
    return id;
})
export const addProducts = createAsyncThunk('products/addProducts',async(product)=>{
    const res = await axios.post(BASE_URL,product);
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
        .addCase(deleteProducts.fulfilled, (state,action) =>{
            state.products = state.products.filter((product)=> product.id !== action.payload)
        })
        .addCase(addProducts.fulfilled, (state,action) =>{
            state.products.push(action.payload)
        })
    }
});

export default productSlice.reducer;
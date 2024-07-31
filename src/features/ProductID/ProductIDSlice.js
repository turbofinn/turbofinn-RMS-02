import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
     productID: ''
} 

export const ProductIDSlice = createSlice({
     
    name: 'Product ID',
    initialState,
    reducers: {
         
         addProductID: ( state, action ) => {
              state.productID = action.payload ;
         }

    }
});

export const { addProductID } = ProductIDSlice.actions;
export default ProductIDSlice.reducer;
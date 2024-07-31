import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {

    mealCartData: [],                     // { itemId: '', Quantity: 0, price: 0 }  create order
    SelectMealData: []                    //  render selected items
    
}

export const MealCartDataSlice = createSlice({

    name: 'Meal Cart',
    initialState,
    reducers: {

        addMealData: (state, action) => {

            const index = state.mealCartData.findIndex( obj => ( obj.itemId === action.payload.itemId ) );

            if(index !== -1 ) state.mealCartData[ index ] = action.payload;
            else state.mealCartData.push(action.payload);
            
        },
        addSelectedData: (state, action) => {
            
            const index = state.SelectMealData.findIndex( obj => ( obj.products.itemId === action.payload.products.itemId ) );

            if(index !== -1 ) state.SelectMealData[ index ] = action.payload;
            else state.SelectMealData.push(action.payload);

        },
        removeData: (state, action) => {

            const upadatedData = state.SelectMealData.filter( obj => ( obj.products.itemId !== action.payload ) );

            state.SelectMealData = upadatedData;

        },
        addNewQuantity: (state, action) => {

            const index01 = state.mealCartData.findIndex( obj => ( obj.itemId === action.payload.itemId ) );
            if( index01 !== -1 ) state.mealCartData[ index01 ].Quantity = action.payload.Quantity;

            const index02 = state.SelectMealData.findIndex( obj => ( obj.products.itemId !== action.payload.itemId ) );
            if( index02 !== -1 ) state.SelectMealData[ index02 ].Quantity = action.payload.Quantity;
        },
        addTotalBill: (state, action) => {
            
        }

    } 

})
 
export const { addMealData, addSelectedData, removeData, addNewQuantity } = MealCartDataSlice.actions;
export default MealCartDataSlice.reducer;
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {

    mealCartData: []                     // { itemID: '', Quantity: 0, price: 0 }
    
}

export const MealCartDataSlice = createSlice({

    name: 'Meal Cart',
    initialState,
    reducers: {
        addMealData: (state, action) => {
            const index = state.mealCartData.findIndex( obj => obj.itemId );

            if(index !== -1 ) state.mealCartData[ index ] = action.payload;
            else state.mealCartData.push(action.payload);
            
        }
    } 

})

export const { addMealData } = MealCartDataSlice.actions;
export default MealCartDataSlice.reducer;
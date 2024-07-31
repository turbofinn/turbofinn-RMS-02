import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ItemDataSlice from '../features/ItemData/ItemDataSlice.js';
import ProductIDSlice from '../features/ProductID/ProductIDSlice.js';
import MealCartDataSlice from '../features/UserMealCart/MealCartDataSlice.js';

const rootReducer = combineReducers({

  ItemData: ItemDataSlice,
  ProductId: ProductIDSlice,
  MealCartData: MealCartDataSlice,

});

export const store = configureStore({

  reducer: rootReducer,
  
});

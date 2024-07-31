import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ItemDataSlice from '../features/ItemData/ItemDataSlice';
import ProductIDSlice from '../features/ProductID/ProductIDSlice';
import MealCartDataSlice from '../features/UserMealCart/MealCartDataSlice';

const rootReducer = combineReducers({

  ItemData: ItemDataSlice,
  ProductId: ProductIDSlice,
  MealCartData: MealCartDataSlice,

});

export const store = configureStore({

  reducer: rootReducer,
  
});

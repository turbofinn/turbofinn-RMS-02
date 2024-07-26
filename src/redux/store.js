import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ItemDataSlice from '../features/ItemData/ItemDataSlice';

const rootReducer = combineReducers({
  ItemData: ItemDataSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    Items: [{
        category: '',
        createdDate: 0,
        cuisine: '',
        description: '',
        eta: '',
        flag: '',
        isDeleted: '',
        itemId: '',
        itemPicture: '',
        name: '',
        price: 0,
        restaurantId: '',
        tag: '',
        type: '',
        updatedDate: 0,
    }]
}

export const ItemDataSlice = createSlice({
    name: 'Item Data',
    initialState,
    reducers: {
        addItemData: (state, action) => {
            state.Items = (action.payload);
        }
    }
})

export const { addItemData } = ItemDataSlice.actions;
export default ItemDataSlice.reducer;
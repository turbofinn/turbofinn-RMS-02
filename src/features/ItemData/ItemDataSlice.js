import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    Items: [{
        category: "vegetarian",
        createdDate: 1721624442172,
        cuisine: "international",
        description: "fresh caesar salad with crunchy croutons",
        eta: "10 mins",
        flag: "veg",
        isDeleted:"false",
        itemId: "512edd17-6641-4d2c-b0bf-c48a84173ee1",
        itemPicture: "b8a6dbf1-32f8-4243-ab22-3e5d949534cd",
        name: "caesar salad",
        price: 120,
        restaurantId: "308bc44a-de00-488e-b980-5ee0797e82e2",
        tag: "takeaway",
        type: "salad",
        updatedDate: 1721624442172,
    }]
}

export const ItemDataSlice = createSlice({
    name: 'Item Data',
    initialState,
    reducers: {
        addItemData: (state, action) => {
            state.Items.push(action.payload);
        }
    }
})

export const { addItemData } = ItemDataSlice.actions;
export default ItemDataSlice.reducer;
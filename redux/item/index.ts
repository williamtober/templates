import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { RootState } from '../';
import { Item, SubItem, ItemState } from './types';
// thunks would go here but we don't have any for this sample app
import { getData } from '../../data/local-storage';

const initialState: ItemState = {
    loading: true,
    error: null,
    items: []
}


// createSlice
const item = createSlice({
    name: 'item',
    initialState,
    reducers: {
        // basic crud operations
        createItem: (state: ItemState, action: PayloadAction<Item>) => {
            state.items.push(action.payload);
        },
        updateItem: (state: ItemState, action: PayloadAction<Item>) => {
            const index = state.items.findIndex(item => item._id === action.payload._id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state: ItemState, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item._id !== action.payload);
        },
        setLoading: (state: ItemState, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        }
    },
    // extra reducers would go here but we don't have any for this sample app
})

// selectors
export const selectItems = (state: RootState) => state.item.items;
export const selectItem = (state: RootState, _id: string) => state.item.items.find((item:Item) => item._id === _id);
export const selectItemLoading = (state: RootState) => state.item.loading;

// actions
export const { createItem, updateItem, deleteItem, setLoading } = item.actions;

// reducer
export default item.reducer;
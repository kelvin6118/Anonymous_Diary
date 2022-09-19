import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
    open: boolean,
    Emoji: boolean,
    Giphy: boolean,
    selectedGif: string
}

const initialState: FormState = {
    open: false,
    Emoji: false,
    Giphy: true,
    selectedGif: ""
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        openForm: (state) => {
            state.open = true;
        },
        closeForm: (state) => {
            state.open = false;
        },
        openEmoji: (state) =>{
            state.Emoji = true;
        },
        closeEmoji: (state) =>{
            state.Emoji = true;
        },
        openGiphy: (state) =>{
            state.Giphy = true;
        },
        closeGiphy: (state) =>{
            state.Giphy = true;
        },
        updateGif: (state, action: PayloadAction<string>) => {
            state.selectedGif = action.payload;
        }
    }
})

export const {openForm, closeForm, openEmoji, closeEmoji, openGiphy, closeGiphy, updateGif} = FormSlice.actions

export default FormSlice.reducer

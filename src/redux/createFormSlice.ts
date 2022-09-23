import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
    FormSwitch: boolean,
    EmojiSwitch: boolean,
    GiphySwitch: boolean,
    selectedGif: string,
    refresh : boolean
}

const initialState: FormState = {
    FormSwitch: false,
    EmojiSwitch: false,
    GiphySwitch: true,
    selectedGif: "",
    refresh : false
}

export const FormSlice = createSlice({
    name: 'form',
    initialState,
    reducers:{
        switchForm: (state, action: PayloadAction<boolean>) => {
            state.FormSwitch = action.payload;
        },
        switchEmoji: (state, action: PayloadAction<boolean>) =>{
            state.EmojiSwitch = action.payload;
        },
        switchGiphy: (state, action: PayloadAction<boolean>) =>{
            state.GiphySwitch = action.payload;
        },
        updateGif: (state, action: PayloadAction<string>) => {
            state.selectedGif = action.payload;
        },
        refresh: (state, action: PayloadAction<boolean>) => {
            state.refresh = action.payload;
        }
    }
})

export const {switchForm, switchEmoji, switchGiphy, updateGif, refresh} = FormSlice.actions

export default FormSlice.reducer

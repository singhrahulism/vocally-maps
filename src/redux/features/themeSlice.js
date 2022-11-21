import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action) => {
            state.value = !state.value
        }
    }
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
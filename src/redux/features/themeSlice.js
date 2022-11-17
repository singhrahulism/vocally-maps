import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false        // true -> dark mode, false -> light mode
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
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: true
}

const labelSlice = createSlice({
    name: 'label',
    initialState,
    reducers: {
        toggleLabelVisibility: (state, action) => {
            state.value = !state.value
        }
    }
})

export const { toggleLabelVisibility } = labelSlice.actions

export default labelSlice.reducer
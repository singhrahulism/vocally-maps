import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import labelReducer from "./features/labelSlice"

export default configureStore({
    reducer: {
        theme: themeReducer,
        label: labelReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }))
})
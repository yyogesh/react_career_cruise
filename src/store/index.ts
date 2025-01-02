import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './slice/jobSlice';
import { errorMiddleware, loggerMiddleware } from "./middleware";

export const store = configureStore({
    reducer: {
        // Define your reducers here
        jobs: jobReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }).concat(errorMiddleware, loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
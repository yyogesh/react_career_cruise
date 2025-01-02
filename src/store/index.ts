import { configureStore } from "@reduxjs/toolkit";
import jobReducer from './slice/jobSlice';

export const store = configureStore({
    reducer: {
        // Define your reducers here
        jobs: jobReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
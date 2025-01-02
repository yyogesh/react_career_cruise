import { Middleware } from "@reduxjs/toolkit";
import { store } from "./Index";

export const errorMiddleware: Middleware = ({ dispatch }) => (next) => (action) => {
    return next(action);
}

export const loggerMiddleware: Middleware = () => (next) => (action: any) => {
    if (process.env.NODE_ENV !== 'production') {
        console.group(action.type);
        console.info('dispatching', action);
        const result = next(action);
        console.log('next state', store.getState());
        console.groupEnd();
        return result;
    }
    return next(action);
}
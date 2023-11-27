

export interface ReduxApiError {
    errorCode: number;
    message: string;
    type: string;
};

import { configureStore } from '@reduxjs/toolkit';
import itemReducer from './item';

const store = configureStore({
    reducer: {
        item: itemReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware() // does not permit non-serializable values
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
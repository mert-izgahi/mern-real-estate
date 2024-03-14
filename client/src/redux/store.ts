import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { authApi } from "./auth/api";
import authSlice from "./auth/slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
});

const presistConfig = {
    key: "root",
    storage,
    version: 1,
    blacklist: [authApi.reducerPath],
};

const presistedReducer = persistReducer(presistConfig, rootReducer);

const store = configureStore({
    reducer: presistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(authApi.middleware),

    devTools: true,

    // devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
export const presistor = persistStore(store);

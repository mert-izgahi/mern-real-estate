import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IAuthState {
    user: IUser | null;
    isAuthenticated: boolean;
}

const initialState: IAuthState = {
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser | null>) {
            state.user = action.payload;
        },
        setIsAuthenticated(state, action: PayloadAction<boolean>) {
            state.isAuthenticated = action.payload;
        },
    },
});

export const { setUser, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;

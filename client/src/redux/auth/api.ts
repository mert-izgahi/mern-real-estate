import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types";
import { z } from "zod";
import {
    profileInputSchema,
    signInInputSchema,
    signUpInputSchema,
} from "../../validations";
import { setIsAuthenticated, setUser } from "./slice";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
        credentials: "include",
        mode: "cors",
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (body: z.infer<typeof signUpInputSchema>) => ({
                url: "/auth/sign-up",
                method: "POST",
                body,
            }),

            transformResponse: (response: { user: IUser }) => ({
                user: response.user,
            }),

            transformErrorResponse: (response: any) => {
                return response.error.message;
            },
        }),

        signIn: builder.mutation({
            query: (body: z.infer<typeof signInInputSchema>) => ({
                url: "/auth/sign-in",
                method: "POST",
                body,
            }),

            transformResponse: (response: { user: IUser }) => {
                return {
                    user: response.user,
                };
            },

            transformErrorResponse: (response: any) => {
                return response.data;
            },

            onQueryStarted: async (
                body: z.infer<typeof signInInputSchema>,

                { dispatch, queryFulfilled }
            ) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data.user));
                    dispatch(setIsAuthenticated(true));
                } catch (error) {
                    console.log(error);
                }
            },
        }),

        signOut: builder.mutation({
            query: () => ({
                url: "/auth/sign-out",
                method: "POST",
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    dispatch(setUser(null));
                    dispatch(setIsAuthenticated(false));
                } catch (error) {
                    console.log(error);
                }
            },
        }),

        updateMe: builder.mutation({
            query: (body: z.infer<typeof profileInputSchema>) => ({
                url: "/auth/update-me",
                method: "PUT",
                body,
            }),

            transformResponse: (response: { user: IUser }) => {
                return {
                    user: response.user,
                };
            },

            transformErrorResponse: (response: any) => {
                return response.data;
            },

            onQueryStarted: async (
                body: z.infer<typeof signUpInputSchema>,

                { dispatch, queryFulfilled }
            ) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setUser(data.user));
                } catch (error) {
                    console.log(error);
                }
            },
        }),

        deleteMe: builder.mutation({
            query: () => ({
                url: "/auth/delete-me",
                method: "DELETE",
            }),

            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    await queryFulfilled;
                    dispatch(setUser(null));
                    dispatch(setIsAuthenticated(false));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const {
    useSignUpMutation,
    useSignInMutation,
    useSignOutMutation,
    useUpdateMeMutation,
    useDeleteMeMutation,
} = authApi;

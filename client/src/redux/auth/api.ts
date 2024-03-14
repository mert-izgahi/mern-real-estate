import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../../types";
import { z } from "zod";
import { signInInputSchema, signUpInputSchema } from "../../validations";
import { setIsAuthenticated, setUser } from "./slice";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
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
    }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;

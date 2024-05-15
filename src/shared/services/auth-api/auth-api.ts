import { LoginArgs, SignUpArgs, SignUpResponse, User } from '@/shared/services/auth-api/auth.types'
import { baseApi } from '@/shared/services/base-api'

const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      authMe: builder.query<User | null, void>({
        providesTags: ['AuthMe'],
        query: () => {
          return {
            url: `v1/auth/me`,
          }
        },
      }),
      logout: builder.mutation<void, void>({
        invalidatesTags: ['AuthMe'],
        query: () => {
          return {
            method: 'POST',
            url: `v1/auth/logout`,
          }
        },
      }),
      signIn: builder.mutation<{ accessToken: string }, LoginArgs>({
        extraOptions: { maxRetries: 2 },
        invalidatesTags: ['AuthMe'],
        query: ({ email, password }) => {
          return {
            body: { email, password },
            method: 'POST',
            url: `v1/auth/login`,
          }
        },
      }),
      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: (args: SignUpArgs) => {
          return {
            body: args,
            method: 'POST',
            url: `v1/auth/sign-up`,
          }
        },
      }),
    }
  },
})

export const { useAuthMeQuery, useLogoutMutation, useSignInMutation, useSignUpMutation } = authApi

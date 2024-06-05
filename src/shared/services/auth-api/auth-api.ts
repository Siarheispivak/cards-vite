import {
  LoginArgs,
  SignUpArgs,
  SignUpResponse,
  User,
  VerificationEmailArgs,
} from '@/shared/services/auth-api/auth.types'
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
      recoveryPassword: builder.mutation<void, VerificationEmailArgs>({
        query: body => {
          return {
            body: body,
            method: 'POST',
            url: `v1/auth/recover-password`,
          }
        },
      }),
      resetPassword: builder.mutation<void, Pick<SignUpArgs, 'password'> & { token: string }>({
        query: body => {
          return {
            body: {
              password: body.password,
            },
            method: 'POST',
            url: `v1/auth/reset-password/${body.token}`,
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

export const {
  useAuthMeQuery,
  useLogoutMutation,
  useRecoveryPasswordMutation,
  useResetPasswordMutation,
  useSignInMutation,
  useSignUpMutation,
} = authApi

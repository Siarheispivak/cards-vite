import { baseApi } from '@/shared/services'

import {
  CreateLearnGradeArgs,
  GetDeckArgs,
  GetDeckResponse,
  GetLearnGradeArgs,
  LearnResponse,
} from './learn.types'

export const learnApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createLearnGrade: builder.mutation<LearnResponse, CreateLearnGradeArgs>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks/${args.cardId}/learn`,
        }),
      }),
      getDeck: builder.query<GetDeckResponse, GetDeckArgs>({
        query: args => ({
          url: `v1/decks/${args.id}`,
        }),
      }),
      getLearnCard: builder.query<LearnResponse, GetLearnGradeArgs>({
        providesTags: ['Cards'],
        query: args => ({
          url: `v1/decks/${args.id}/learn`,
        }),
      }),
    }
  },
})

export const { useCreateLearnGradeMutation, useGetDeckQuery, useGetLearnCardQuery } = learnApi

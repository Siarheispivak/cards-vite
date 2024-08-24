import { baseApi } from '@/shared/services'

import {
  CreateLearnGradeArgs,
  GetCardByIdResponse,
  GetDeckArgs,
  GetDeckResponse,
  GetLearnGradeArgs,
  LearnResponse,
  retrieveCardsArgs,
  retrieveCardsInDeck,
} from './card.types'

export const cardApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<GetCardByIdResponse, { data: FormData; id: string }>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args.data,
          method: 'POST',
          url: `v1/decks/${args.id}/cards`,
        }),
      }),
      createLearnGrade: builder.mutation<LearnResponse, CreateLearnGradeArgs>({
        invalidatesTags: ['Cards'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks/${args.cardId}/learn`,
        }),
      }),
      deleteCard: builder.mutation<void, { id: string }>({
        invalidatesTags: ['Cards'],
        query: args => ({
          method: 'DELETE',
          url: `v1/cards/${args.id}`,
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
      retrieveCards: builder.query<retrieveCardsInDeck, retrieveCardsArgs>({
        providesTags: ['Cards'],
        query: ({ id, ...args }) => ({
          body: args ?? undefined,
          url: `/v1/cards/${id}/cards`,
        }),
      }),
      updateCard: builder.mutation<GetCardByIdResponse, { data: FormData; id: string | undefined }>(
        {
          invalidatesTags: ['Cards'],
          query: args => ({
            body: args.data,
            method: 'PATCH',
            url: `v1/cards/${args.id}`,
          }),
        }
      ),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetDeckQuery,
  useGetLearnCardQuery,
  useUpdateCardMutation,
} = cardApi

export type retrieveCardsInDeck = {
  items: GetCardByIdResponse
  pagination: pagination
}
export type retrieveCardsArgs = {
  answer: string
  currentPage: number
  id: string
  itemsPerPage: number
  question: string
}
export type pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}
export type GetCardByIdResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
export type GetDeckArgs = {
  id: string
}

export type GetDeckResponse = {
  author: GetDeckAuthorResponse
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type GetDeckAuthorResponse = {
  id: string
  name: string
}
export type LearnResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
export type CreateLearnGradeArgs = {
  cardId: string
  grade: number
}
export type GetLearnGradeArgs = {
  id: string
  previousCardId?: string
}

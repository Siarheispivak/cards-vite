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

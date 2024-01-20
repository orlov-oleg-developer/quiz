export interface UserSchema {
    currentQuestion: number
    result: Result
    totalScore: string,
}

export type Result = {
    easy: ResultItem[],
    medium: ResultItem[],
    hard: ResultItem[]
}

export type ResultItem = {
    id: string
    question: string,
    type: 'boolean' | 'multiple',
    answers: Answer[]
}

export type Answer = {
    id: string,
    text: string
    status: AnswerStatus
}

export type AnswerStatus = 'OK' | 'Error' | null
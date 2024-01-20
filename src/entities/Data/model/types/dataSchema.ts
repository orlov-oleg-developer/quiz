export interface DataSchema {
    isLoading: boolean
    error?: string;
    data: DataType[] | null
}

export type DataType = {
    id: string,
    type: QuizType,
    difficulty: Difficulty,
    category: string,
    question: string,
    answers: Answer[],
    correct: string | string[],
}

export type Answer = {
    id: string,
    text: string,
    isChecked: boolean
}

export type Dto = {
    results: DtoElement[]
}

type DtoElement = {
    type: QuizType,
    difficulty: Difficulty,
    category: string,
    question: string,
    correct_answers: string | string[],
    incorrect_answers: string[]
}

export type Difficulty = 'easy' | 'hard' | 'medium'
export type QuizType = 'boolean' | 'multiple'
export const DifficultyDictionary: Record<Difficulty, string> = {
    easy: 'Простая',
    medium: 'Средняя',
    hard: 'Трудная'
}
import { v1 } from "uuid";
import { DataSchema, Dto } from "../types/dataSchema";

/**
 * Turn dto in Datype[]
 * @param dto - dto with quiz from public server
 * @returns Datype[]
 */
export const dtoToDataType = (dto: Dto): DataSchema['data'] => {
    return dto.results.map(item => {
        const answers: string[] = []
        answers.push(...item.incorrect_answers)
        if (typeof item.correct_answers === 'object') answers.push(...(item.correct_answers as string[]))
        else answers.push(item.correct_answers as string)

        return {
            id: v1(),
            type: item.type,
            difficulty: item.difficulty,
            category: item.category,
            question: item.question,
            answers: answers.map((answer) => ({
                id: v1(),
                text: answer,
                isChecked: false
            })),
            correct: item.correct_answers
        }
    })
}
import { DataType } from "@/entities/Data/model/types/dataSchema";
import { Answer, Result, ResultItem } from "../types/userSchema";

export const getUserResult = (data: DataType[]): Result => {
    return {
        easy: getResult(data.filter(question => question.difficulty === 'easy')),
        medium: getResult(data.filter(question => question.difficulty === 'medium')),
        hard: getResult(data.filter(question => question.difficulty === 'hard'))
    }
}

const getResult = (data: DataType[]): ResultItem[] => {
    return data.map(item => ({
        id: item.id,
        question: item.question,
        type: item.type,
        answers: item.answers.map(answer => {
            let status: Answer['status'] = null
            if (answer.isChecked && item.correct.includes(answer.text)) status = 'OK'
            if (answer.isChecked && !item.correct.includes(answer.text)) status = 'Error'
            if (item.correct.includes(answer.text) && !answer.isChecked) status = 'Error'

            return {
                id: answer.id,
                text: answer.text,
                status: status,
                isChecked: answer.isChecked
            }
        })
    }))
}
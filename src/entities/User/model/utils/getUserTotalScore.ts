import { Result } from "../types/userSchema";

export const getUserTotalScore = (result: Result, countOfQuestions: number): string => {
    let countOfCorrectAnswers = 0
    Object.values(result).forEach(difficulty => {
        difficulty.forEach(item => {
            if (!item.answers.filter(answer => answer.status === 'Error').length) {
                countOfCorrectAnswers++
            }
        })
    })

    return `${countOfCorrectAnswers}/${countOfQuestions}`
}
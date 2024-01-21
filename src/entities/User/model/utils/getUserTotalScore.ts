import { Result } from "../types/userSchema";

/**
 * Returns the user's calculated total result
 * @param result - user result with 3 difficulties
 * @param countOfQuestions
 * @returns string
 */
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
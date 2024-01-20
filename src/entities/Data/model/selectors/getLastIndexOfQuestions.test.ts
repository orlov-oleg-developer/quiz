import { DeepPartial } from '@reduxjs/toolkit';
import { getLastIndexOfQuestions } from './getLastIndexOfQuestions';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

describe('getLastIndexOfQuestions.test', () => {
    test('must return number', () => {
        const state: DeepPartial<StateSchema> = {
            data: {
                data: [
                    {
                        id: 'eea60f10-b63b-11ee-a56b-776d883a8422',
                        type: 'multiple',
                        difficulty: 'easy',
                        category: 'Entertainment: Video Games',
                        question: 'What is?',
                        answers: [],
                        correct: [
                            'Contraband'
                        ]
                    },
                    {
                        id: 'eea60f10-b63b-11ee-a56b-776d883a8422',
                        type: 'multiple',
                        difficulty: 'easy',
                        category: 'Entertainment: Video Games',
                        question: 'What is?',
                        answers: [],
                        correct: [
                            'Contraband'
                        ]
                    },
                ]
            }
        };
        expect(getLastIndexOfQuestions(state as StateSchema)).toEqual(1);
    });
});

import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";
import { getData } from "./getData";

describe('getData.test', () => {
    test('should return value', () => {
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
                ]
            }
        };
        expect(getData(state as StateSchema)).toEqual([{
            id: 'eea60f10-b63b-11ee-a56b-776d883a8422',
            type: 'multiple',
            difficulty: 'easy',
            category: 'Entertainment: Video Games',
            question: 'What is?',
            answers: [],
            correct: [
                'Contraband'
            ]
        }]);
    });
});

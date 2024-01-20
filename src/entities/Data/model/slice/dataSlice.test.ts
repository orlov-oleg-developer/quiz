import { DeepPartial } from "@reduxjs/toolkit";
import { DataSchema } from "../types/dataSchema";
import { dataActions, dataReducer } from "./dataSlice";

const state: DeepPartial<DataSchema> = {
    data: [
        {
            id: 'd4bca940-b773-11ee-9cfc-e3a7d4e4d3a7',
            type: 'boolean',
            difficulty: 'easy',
            category: 'Entertainment: Japanese Anime and Manga',
            question: 'Kiznaiver is an adaptation of a manga.',
            answers: [
                {
                    id: 'd4bca941-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'True',
                    isChecked: false
                },
                {
                    id: 'd4bca942-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'False',
                    isChecked: false
                }
            ],
            correct: 'False'
        },
        {
            id: 'd4bca943-b773-11ee-9cfc-e3a7d4e4d3a7',
            type: 'multiple',
            difficulty: 'easy',
            category: 'Entertainment: Music',
            question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
            answers: [
                {
                    id: 'd4bca944-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'Echo and the Bunnymen',
                    isChecked: false
                },
                {
                    id: 'd4bca945-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'New Order',
                    isChecked: false
                },
                {
                    id: 'd4bca946-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'The Cure',
                    isChecked: false
                },
                {
                    id: 'd4bca947-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'The Smiths',
                    isChecked: false
                }
            ],
            correct: [
                'The Cure',
                'The Smiths'
            ]
        }
    ]
};

const stateWithCahnges: DeepPartial<DataSchema> = {
    data: [
        {
            id: 'd4bca940-b773-11ee-9cfc-e3a7d4e4d3a7',
            type: 'boolean',
            difficulty: 'easy',
            category: 'Entertainment: Japanese Anime and Manga',
            question: 'Kiznaiver is an adaptation of a manga.',
            answers: [
                {
                    id: 'd4bca941-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'True',
                    isChecked: true
                },
                {
                    id: 'd4bca942-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'False',
                    isChecked: false
                }
            ],
            correct: 'False'
        },
        {
            id: 'd4bca943-b773-11ee-9cfc-e3a7d4e4d3a7',
            type: 'multiple',
            difficulty: 'easy',
            category: 'Entertainment: Music',
            question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
            answers: [
                {
                    id: 'd4bca944-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'Echo and the Bunnymen',
                    isChecked: false
                },
                {
                    id: 'd4bca945-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'New Order',
                    isChecked: true
                },
                {
                    id: 'd4bca946-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'The Cure',
                    isChecked: false
                },
                {
                    id: 'd4bca947-b773-11ee-9cfc-e3a7d4e4d3a7',
                    text: 'The Smiths',
                    isChecked: false
                }
            ],
            correct: [
                'The Cure',
                'The Smiths'
            ]
        }
    ]
};

describe('dataSlice.test', () => {
    test('test checkAnswer', () => {
        expect(dataReducer(
            state as DataSchema,
            dataActions.checkAnswer({ id: 'd4bca941-b773-11ee-9cfc-e3a7d4e4d3a7', questionIndex: 0, type: 'boolean' }),
        ).data[0].answers).toEqual([
            {
                id: 'd4bca941-b773-11ee-9cfc-e3a7d4e4d3a7',
                text: 'True',
                isChecked: true
            },
            {
                id: 'd4bca942-b773-11ee-9cfc-e3a7d4e4d3a7',
                text: 'False',
                isChecked: false
            }
        ]);
    });

    test('test resetData', () => {
        expect(dataReducer(
            stateWithCahnges as DataSchema,
            dataActions.resetData(),
        )).toEqual(state);
    });
});



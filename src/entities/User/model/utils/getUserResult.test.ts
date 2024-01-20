
import { DataType } from "@/entities/Data/model/types/dataSchema";
import { Result } from "../types/userSchema";
import { getUserResult } from "./getUserResult";

const data: DataType[] = [
    {
        id: 'e758c0e0-b6ea-11ee-aa6a-83c7c925c957',
        type: 'boolean',
        difficulty: 'easy',
        category: 'Entertainment: Video Games',
        question: 'In Counter-Strike: Global Offensive, what is the rarity of discontinued skins called?',
        answers: [
            {
                id: 'e758e7f0-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Discontinued',
                isChecked: false
            },
            {
                id: 'e758e7f1-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Diminshed',
                isChecked: false
            },
            {
                id: 'e758e7f2-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Limited',
                isChecked: false
            },
            {
                id: 'e758e7f3-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Contraband',
                isChecked: true
            }
        ],
        correct: [
            'Contraband'
        ]
    },
    {
        id: 'ed99f737-b6f4-11ee-91b1-8bab4aedff5c',
        type: 'multiple',
        difficulty: 'easy',
        category: 'Entertainment: Music',
        question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
        answers: [
            {
                id: 'ed99f738-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'Echo &amp; the Bunnymen',
                isChecked: false
            },
            {
                id: 'ed99f739-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'New Order',
                isChecked: false
            },
            {
                id: 'ed99f73a-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'The Cure',
                isChecked: true
            },
            {
                id: 'ed99f73b-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'The Smiths',
                isChecked: false
            }
        ],
        correct: [
            'The Cure',
            'The Smiths'
        ]
    },
    {
        id: 'ed99f73c-b6f4-11ee-91b1-8bab4aedff5c',
        type: 'multiple',
        difficulty: 'medium',
        category: 'Entertainment: Video Games',
        question: 'What is the lowest amount of max health you can have in Team Fortress 2?',
        answers: [
            {
                id: 'ed99f73d-b6f4-11ee-91b1-8bab4aedff5c',
                text: '100',
                isChecked: false
            },
            {
                id: 'ed99f73e-b6f4-11ee-91b1-8bab4aedff5c',
                text: '50',
                isChecked: true
            },
            {
                id: 'ed99f73f-b6f4-11ee-91b1-8bab4aedff5c',
                text: '95',
                isChecked: false
            },
            {
                id: 'ed99f740-b6f4-11ee-91b1-8bab4aedff5c',
                text: '70',
                isChecked: true
            }
        ],
        correct: [
            '70'
        ]
    },
    {
        id: 'ed99f746-b6f4-11ee-91b1-8bab4aedff5c',
        type: 'multiple',
        difficulty: 'hard',
        category: 'Entertainment: Video Games',
        question: 'Meryl Silverburgh, a video game character from the Metal Gear series, was originally a character in which game?',
        answers: [
            {
                id: 'ed99f747-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'Contra',
                isChecked: false
            },
            {
                id: 'ed99f748-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'Castlevania: Symphony of the Night',
                isChecked: false
            },
            {
                id: 'ed99f749-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'Policenauts',
                isChecked: true
            },
            {
                id: 'ed99f74a-b6f4-11ee-91b1-8bab4aedff5c',
                text: 'Gradius',
                isChecked: true
            }
        ],
        correct: [
            'Policenauts',
            'Gradius'
        ]
    },
]

export const userResultMock: Result = {
    easy: [
        {
            id: 'e758c0e0-b6ea-11ee-aa6a-83c7c925c957',
            question: 'In Counter-Strike: Global Offensive, what is the rarity of discontinued skins called?',
            type: 'boolean',
            answers: [
                {
                    id: 'e758e7f0-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Discontinued',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'e758e7f1-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Diminshed',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'e758e7f2-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Limited',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'e758e7f3-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Contraband',
                    status: 'OK',
                    isChecked: true
                }
            ],
        },
        {
            id: 'ed99f737-b6f4-11ee-91b1-8bab4aedff5c',
            question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
            type: 'multiple',
            answers: [
                {
                    id: 'ed99f738-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Echo &amp; the Bunnymen',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'ed99f739-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'New Order',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'ed99f73a-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'The Cure',
                    status: 'OK',
                    isChecked: true
                },
                {
                    id: 'ed99f73b-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'The Smiths',
                    status: 'Error',
                    isChecked: false
                }
            ],
        },
    ],
    medium: [
        {
            id: 'ed99f73c-b6f4-11ee-91b1-8bab4aedff5c',
            type: 'multiple',
            question: 'What is the lowest amount of max health you can have in Team Fortress 2?',
            answers: [
                {
                    id: 'ed99f73d-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '100',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'ed99f73e-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '50',
                    status: 'Error',
                    isChecked: true
                },
                {
                    id: 'ed99f73f-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '95',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'ed99f740-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '70',
                    status: 'OK',
                    isChecked: true
                }
            ],
        },
    ],
    hard: [
        {
            id: 'ed99f746-b6f4-11ee-91b1-8bab4aedff5c',
            type: 'multiple',
            question: 'Meryl Silverburgh, a video game character from the Metal Gear series, was originally a character in which game?',
            answers: [
                {
                    id: 'ed99f747-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Contra',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'ed99f748-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Castlevania: Symphony of the Night',
                    status: null,
                    isChecked: false
                },
                {
                    id: 'ed99f749-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Policenauts',
                    status: 'OK',
                    isChecked: true
                },
                {
                    id: 'ed99f74a-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Gradius',
                    status: 'OK',
                    isChecked: true
                }
            ],
        },
    ]
}

describe('getUserResult.test', () => {
    test('positive', () => {
        expect(getUserResult(data)).toEqual(userResultMock);
    });
});


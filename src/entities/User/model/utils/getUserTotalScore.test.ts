
import { Result } from "../types/userSchema";
import { getUserTotalScore } from "./getUserTotalScore";

const userResult: Result = {
    easy: [
        {
            id: 'e758c0e0-b6ea-11ee-aa6a-83c7c925c957',
            question: 'In Counter-Strike: Global Offensive, what is the rarity of discontinued skins called?',
            type: 'boolean',
            answers: [
                {
                    id: 'e758e7f0-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Discontinued',
                    status: null
                },
                {
                    id: 'e758e7f1-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Diminshed',
                    status: null
                },
                {
                    id: 'e758e7f2-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Limited',
                    status: null
                },
                {
                    id: 'e758e7f3-b6ea-11ee-aa6a-83c7c925c957',
                    text: 'Contraband',
                    status: 'OK'
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
                    status: null
                },
                {
                    id: 'ed99f739-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'New Order',
                    status: null
                },
                {
                    id: 'ed99f73a-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'The Cure',
                    status: 'OK'
                },
                {
                    id: 'ed99f73b-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'The Smiths',
                    status: 'Error'
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
                    status: null
                },
                {
                    id: 'ed99f73e-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '50',
                    status: 'Error'
                },
                {
                    id: 'ed99f73f-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '95',
                    status: null
                },
                {
                    id: 'ed99f740-b6f4-11ee-91b1-8bab4aedff5c',
                    text: '70',
                    status: 'OK'
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
                    status: null
                },
                {
                    id: 'ed99f748-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Castlevania: Symphony of the Night',
                    status: null
                },
                {
                    id: 'ed99f749-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Policenauts',
                    status: 'OK'
                },
                {
                    id: 'ed99f74a-b6f4-11ee-91b1-8bab4aedff5c',
                    text: 'Gradius',
                    status: 'OK'
                }
            ],
        },
    ]
}

describe('getUserTotalScore.test', () => {
    test('positive', () => {
        expect(getUserTotalScore(userResult, 4)).toBe('2/4');
    });
});


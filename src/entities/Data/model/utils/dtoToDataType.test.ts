import { dtoToDataType } from "./dtoToDataType";
import { DataType } from "../types/dataSchema";
import { dtoMock } from "../const/dto";

const returnData: DataType[] = [
    {
        id: 'e758c0e0-b6ea-11ee-aa6a-83c7c925c957',
        type: 'multiple',
        difficulty: 'easy',
        category: 'Entertainment: Video Games',
        question: 'In Counter-Strike: Global Offensive, what&#039;s the rarity of discontinued skins called?',
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
                isChecked: false
            }
        ],
        correct: [
            'Contraband'
        ]
    },
    {
        id: 'e758e7f4-b6ea-11ee-aa6a-83c7c925c957',
        type: 'multiple',
        difficulty: 'easy',
        category: 'Entertainment: Music',
        question: 'Which 80s band is fronted by singer/guitarist Robert Smith?',
        answers: [
            {
                id: 'e758e7f5-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Echo &amp; the Bunnymen',
                isChecked: false
            },
            {
                id: 'e758e7f6-b6ea-11ee-aa6a-83c7c925c957',
                text: 'New Order',
                isChecked: false
            },
            {
                id: 'e758e7f7-b6ea-11ee-aa6a-83c7c925c957',
                text: 'The Cure',
                isChecked: false
            },
            {
                id: 'e758e7f8-b6ea-11ee-aa6a-83c7c925c957',
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
        id: 'e758e7f9-b6ea-11ee-aa6a-83c7c925c957',
        type: 'boolean',
        difficulty: 'easy',
        category: 'Entertainment: Video Games',
        question: 'Niko Bellic is the protagonist of Grand Theft Auto IV.',
        answers: [
            {
                id: 'e758e7fa-b6ea-11ee-aa6a-83c7c925c957',
                text: 'False',
                isChecked: false
            },
            {
                id: 'e758e7fb-b6ea-11ee-aa6a-83c7c925c957',
                text: 'True',
                isChecked: false
            },
        ],
        correct: 'True'
    },
    {
        id: 'e758e7ff-b6ea-11ee-aa6a-83c7c925c957',
        type: 'multiple',
        difficulty: 'medium',
        category: 'Entertainment: Video Games',
        question: 'What is the lowest amount of max health you can have in Team Fortress 2?',
        answers: [
            {
                id: 'e758e800-b6ea-11ee-aa6a-83c7c925c957',
                text: '100',
                isChecked: false
            },
            {
                id: 'e758e801-b6ea-11ee-aa6a-83c7c925c957',
                text: '50',
                isChecked: false
            },
            {
                id: 'e758e802-b6ea-11ee-aa6a-83c7c925c957',
                text: '95',
                isChecked: false
            },
            {
                id: 'e758e803-b6ea-11ee-aa6a-83c7c925c957',
                text: '70',
                isChecked: false
            }
        ],
        correct: [
            '70'
        ]
    },
    {
        id: 'e758e804-b6ea-11ee-aa6a-83c7c925c957',
        type: 'multiple',
        difficulty: 'medium',
        category: 'History',
        question: 'In what prison was human held in 1924?',
        answers: [
            {
                id: 'e758e805-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Ebrach Abbey',
                isChecked: false
            },
            {
                id: 'e758e806-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Hohenasperg',
                isChecked: false
            },
            {
                id: 'e758e807-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Landsberg Prison',
                isChecked: false
            },
            {
                id: 'e758e808-b6ea-11ee-aa6a-83c7c925c957',
                text: 'Spandau Prison',
                isChecked: false
            }
        ],
        correct: [
            'Landsberg Prison',
            'Spandau Prison'
        ]
    }
]

describe('dtoToDataType.test', () => {
    test('positive', () => {
        expect(deleteID(dtoToDataType(dtoMock))).toEqual(deleteID(returnData));
    });
});

const deleteID = (data: DataType[]) => {
    return data.map(quiz => {
        delete quiz.id
        quiz.answers = quiz.answers.map(answer => {
            delete answer.id
            return answer
        })
        return quiz
    })
}

import { Dto } from "../types/dataSchema";

export const dtoMock: Dto = {
    results: [
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Entertainment: Video Games",
            "question": "In Counter-Strike: Global Offensive, what&#039;s the rarity of discontinued skins called?",
            "correct_answers": [
                "Contraband"
            ],
            "incorrect_answers": [
                "Discontinued",
                "Diminshed",
                "Limited"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "easy",
            "category": "Entertainment: Music",
            "question": "Which 80s band is fronted by singer/guitarist Robert Smith?",
            "correct_answers": [
                "The Cure",
                "The Smiths"
            ],
            "incorrect_answers": [
                "Echo &amp; the Bunnymen",
                "New Order"
            ]
        },
        {
            "type": "boolean",
            "difficulty": "easy",
            "category": "Entertainment: Video Games",
            "question": "Niko Bellic is the protagonist of Grand Theft Auto IV.",
            "correct_answers": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "Entertainment: Video Games",
            "question": "What is the lowest amount of max health you can have in Team Fortress 2?",
            "correct_answers": [
                "70"
            ],
            "incorrect_answers": [
                "100",
                "50",
                "95"
            ]
        },
        {
            "type": "multiple",
            "difficulty": "medium",
            "category": "History",
            "question": "In what prison was Adolf Hitler held in 1924?",
            "correct_answers": [
                "Landsberg Prison",
                "Spandau Prison"
            ],
            "incorrect_answers": [
                "Ebrach Abbey",
                "Hohenasperg"
            ]
        }
    ]
}
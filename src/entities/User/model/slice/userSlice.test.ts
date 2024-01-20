import { DeepPartial } from "@reduxjs/toolkit";
import { UserSchema } from "../types/userSchema";
import { userActions, userReducer } from "./userSlice";
import { userResultMock } from "../utils/getUserResult.test";

const state: DeepPartial<UserSchema> = {
    currentQuestion: 0,
    result: null,
    totalScore: ''
};

const stateWithChanges: DeepPartial<UserSchema> = {
    currentQuestion: 0,
    result: userResultMock,
    totalScore: '1 / 2'
};

describe('userSlice.test', () => {
    test('test changeCurrentQuestion', () => {
        expect(userReducer(
            state as UserSchema,
            userActions.changeCurrentQuestion(1),
        ).currentQuestion).toBe(1)
    })

    test('test resetResult', () => {
        expect(userReducer(
            stateWithChanges as UserSchema,
            userActions.resetResult(),
        )).toEqual(state)
    })
});



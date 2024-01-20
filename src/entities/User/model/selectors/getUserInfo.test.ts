import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";
import { getUserInfo } from "./getUserInfo";

describe('getUserInfo.test', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                currentQuestion: 1,
                result: null,
                totalScore: ''
            }
        };
        expect(getUserInfo(state as StateSchema)).toEqual({
            currentQuestion: 1,
            result: null,
            totalScore: ''
        });
    });
});

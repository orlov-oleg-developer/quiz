import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userSchema';
import { DataType } from '@/entities/Data/model/types/dataSchema';
import { getUserResult } from '../utils/getUserResult';
import { getUserTotalScore } from '../utils/getUserTotalScore';

const initialState: UserSchema = {
    currentQuestion: 0,
    result: null,
    totalScore: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeCurrentQuestion: (state, action: PayloadAction<number>) => {
            state.currentQuestion = action.payload
        },
        setResult: (state, action: PayloadAction<DataType[]>) => {
            state.result = getUserResult(action.payload)
            state.totalScore = getUserTotalScore(state.result, action.payload.length)
        },
        resetResult: (state) => {
            state.result = initialState.result
            state.currentQuestion = initialState.currentQuestion
            state.totalScore = initialState.totalScore
        }
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

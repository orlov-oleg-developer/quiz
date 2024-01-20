import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DataSchema, QuizType } from '../types/dataSchema';
import { getQuizData } from '../services/getQuizData';
import { dtoToDataType } from '../utils/dtoToDataType';

const initialState: DataSchema = {
    isLoading: false,
    data: null
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        checkAnswer: (state, action: PayloadAction<{ id: string, questionIndex: number, type: QuizType }>) => {
            const { id, questionIndex, type } = action.payload
            const currentAnswer = state.data[questionIndex].answers.find(answer => answer.id === id)
            if (type === 'boolean') {
                state.data[questionIndex].answers.map(answer => answer.isChecked = false)
            }
            currentAnswer.isChecked = !currentAnswer.isChecked
        },
        resetData: (state) => {
            state.data = state.data.map(quiz => ({
                ...quiz,
                answers: quiz.answers.map(answer => ({
                    ...answer,
                    isChecked: false
                }))
            }))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuizData.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(getQuizData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = dtoToDataType(action.payload)
            })
            .addCase(getQuizData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { actions: dataActions } = dataSlice;
export const { reducer: dataReducer } = dataSlice;

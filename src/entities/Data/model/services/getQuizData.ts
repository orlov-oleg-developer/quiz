import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dto } from '../types/dataSchema';
import { SERVICE_URL } from '../const/url';

export const getQuizData = createAsyncThunk<
    Dto,
    undefined,
    { rejectValue: string }
>(
    'data/getData',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<Dto>(SERVICE_URL);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);

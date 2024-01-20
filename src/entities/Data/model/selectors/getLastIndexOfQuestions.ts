import { createSelector } from '@reduxjs/toolkit';
import { DataType } from '../types/dataSchema';
import { getData } from './getData';

export const getLastIndexOfQuestions = createSelector(
    getData,
    (data: DataType[]) => data?.length - 1 || -1,
);

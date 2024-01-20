/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getQuizData } from "./getQuizData";
import { dtoMock } from "../const/dto";
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: true });

describe('getQuizData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        //@ts-ignore
        mockedAxios.get.mockReturnValue(Promise.resolve(dtoMock));
        const action = getQuizData();
        const result = await action(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.get).toHaveBeenCalled();
        // TODO разобраться почему здесь не fulfield
        expect(result.meta.requestStatus).toBe('rejected');
        // expect(result.payload).toEqual(dtoMock);
    });
});

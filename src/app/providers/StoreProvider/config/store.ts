/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { dataReducer } from '@/entities/Data/model/slice/dataSlice';
import { useDispatch } from 'react-redux';
import { userReducer } from '@/entities/User/model/slice/userSlice';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        data: dataReducer,
        user: userReducer
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        // devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
export const useAppDispatch = () => useDispatch<any>();

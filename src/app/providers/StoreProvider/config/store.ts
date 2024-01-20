import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        // devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

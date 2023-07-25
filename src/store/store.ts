import {combineReducers, configureStore} from '@reduxjs/toolkit';
import typingReducer from './reducers/typingSlice';
import keyboardReducer from './reducers/keyboardSlice';

const rootReducer = combineReducers({
    typing: typingReducer,
    keyboard: keyboardReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
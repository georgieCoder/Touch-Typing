import {configureStore} from '@reduxjs/toolkit';
import typingReducer from './reducers/typingSlice';
import keyboardReducer from './reducers/keyboardSlice';

export const store = configureStore({
    reducer: {
        typing: typingReducer,
        keyboard: keyboardReducer
    }
});
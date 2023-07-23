import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layout: [],
    requiredPresses: [],
    leftHandFinger: '',
    rightHandFinger: '',
    handsVisible: true,
    keyboardVisible: true,
};

const keyboardSlice = createSlice({
     name: 'keyboard',
     initialState,
     reducers: {
        resetKeyboard(state) {
            Object.assign(state, {
                ...initialState  
            });
        },
        setKeyboardLayout(state, action) {
            state.layout = action.payload;
        },

        setRequiredPresses(state, action) {
            state.requiredPresses = action.payload;

            state.leftHandFinger = '';
            state.rightHandFinger = '';
            
            action.payload.forEach(press => {
                if (press.whichHand === "left") {
                    state.leftHandFinger = press.whichFinger;
                } else {
                    state.rightHandFinger = press.whichFinger;
                }
            })
        },

        toggleHands(state) {
            state.handsVisible = !state.handsVisible;
        },
        toggleKeyboard(state) {
            state.keyboardVisible = !state.keyboardVisible;
        }
     }
});

export default keyboardSlice.reducer;
export const { 
        resetKeyboard,
        setKeyboardLayout,
        setRequiredPresses,
        toggleHands,
        toggleKeyboard
            } = keyboardSlice.actions;
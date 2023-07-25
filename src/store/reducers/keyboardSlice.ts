import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ILayout } from "../../models/ILayout";
import { IKeyboardKey, whichFinger } from "../../models/IKeyboardKey";

interface keyboardState {
    layout: ILayout,
    requiredPresses: IKeyboardKey[],
    leftHandFinger: whichFinger,
    rightHandFinger: whichFinger,
    handsVisible: boolean,
    keyboardVisible: boolean,
}

const initialState: keyboardState = {
    layout: [],
    requiredPresses: [],
    leftHandFinger: whichFinger.uncertain,
    rightHandFinger: whichFinger.uncertain,
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
        setKeyboardLayout(state, action: PayloadAction<ILayout>) {
            state.layout = action.payload;
        },

        setRequiredPresses(state, action: PayloadAction<IKeyboardKey[]>) {
            state.requiredPresses = action.payload;

            state.leftHandFinger = whichFinger.uncertain;
            state.rightHandFinger = whichFinger.uncertain;
            
            state.requiredPresses.forEach(key => {
                if (key.info.whichHand === "left") {
                    state.leftHandFinger = key.info.whichFinger;
                } else {
                    state.rightHandFinger = key.info.whichFinger;
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
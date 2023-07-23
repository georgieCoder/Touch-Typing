import { createSlice } from "@reduxjs/toolkit";

const timeLimits = [60, 180, 300, 600, 1200, 1800];
const waitingTimes = [0, 5, 10, 20, 30, 40, 60, 90];

const initialState = {
    text: '',
    lengthLimit: 0,
    currentLetter: '',
    passedText: '',
    comingText: '',
    countCorrectKeys: 0,
    countWrongKeys: 0,
    started: false,
    wasOnceStarted: false,
    wasCorrect: false,
    wasWrong: false,
    time: 0,
    timeLimit: 180,
    timeOnLimit: false,
    waitingTime: 0,
};

const typingSlice = createSlice({
     name: 'typing',
     initialState,
     reducers: {
        initTypingField(state, action) {
            state.text = action.payload.text;
            state.lengthLimit = action.payload.lengthLimit;
        },
        startTyping(state) {
            state.currentLetter = state.text[state.countCorrectKeys];
            state.started = true;
            state.wasWrong = false;
            state.wasCorrect = false;
            state.wasOnceStarted = true;
        },
        stopTyping(state) {
            state.started = false;
        },
        resetTyping(state) {
            Object.assign(state, {
                ...initialState,   
                text: state.text,
                lengthLimit: state.lengthLimit,
                timeLimit: state.timeLimit
            });
        },
        updateVisibleText(state) {
            let countPassed = state.countCorrectKeys;
            let limit = state.lengthLimit;
            if (countPassed <= limit) {
                state.passedText = state.text.slice(0, countPassed);
            } else {
                state.passedText = state.text.slice(countPassed - limit, countPassed);
            }
            state.comingText = state.text.slice(countPassed, countPassed + limit);
        },
        correctKeystroke(state) {
            state.countCorrectKeys++;
            state.currentLetter = state.text[state.countCorrectKeys];
            state.wasCorrect = true;
            state.wasWrong = false;
        },
        incorrectKeystroke(state) {
            state.countWrongKeys++;
            state.wasWrong = true;
            state.wasCorrect = false;
        },
        increaseTimeLimit(state) {
            let currentIndex = timeLimits.indexOf(state.timeLimit);
            if (currentIndex === timeLimits.length - 1) {
                if (state.time < timeLimits[currentIndex]) {
                    for (let limit of timeLimits) {
                        if (state.time < limit) {
                            state.timeLimit = limit;
                            break;
                        }
                    }
                }
            } else {
                state.timeLimit = timeLimits[currentIndex + 1];
            }
        },
        increaseWaitingTime(state) {
            let currentIndex = waitingTimes.indexOf(state.waitingTime);
            if (currentIndex === waitingTimes.length - 1) {
                state.waitingTime = 0;
            } else {
                state.waitingTime = waitingTimes[currentIndex + 1];
            }
        },
        updateTypingTime(state, action) {
            state.time = action.payload;
            state.timeOnLimit = state.time >= state.timeLimit;
        }
     }
});

export default typingSlice.reducer;
export const { 
               initTypingField,
               startTyping, 
               stopTyping, 
               resetTyping, 
               updateVisibleText, 
               correctKeystroke,
               incorrectKeystroke,
               increaseTimeLimit,
               increaseWaitingTime,
               updateTypingTime
             } = typingSlice.actions;
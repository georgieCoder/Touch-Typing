import { IKeyboardKey, keySize, whichFinger, whichHand } from "../models/IKeyboardKey";
import { ILayout } from "../models/ILayout";

export function whatToPress(keyboardLayout: ILayout, letter: string) {
    let requiredPresses: IKeyboardKey[] = [];  

    keyboardLayout &&
    keyboardLayout.forEach((row) => {
        row.forEach((key) => {
            switch (letter) {
                case key.name:
                    requiredPresses.push(key);
                    break;

                case key.info.ifShiftIsPressed:
                    if (key.info.whichHand === 'right') {
                        requiredPresses.push({            
                            name: 'ShiftLeft',
                            info: {
                                whichFinger: whichFinger.uncertain,
                                whichHand: whichHand.left,
                                keySize: keySize.big,
                                ifShiftIsPressed: 'ShiftLeft'
                            }
                        })
                    } else {
                        requiredPresses.push({
                            name: 'ShiftRight',
                            info: {
                                whichFinger: whichFinger.uncertain,
                                whichHand: whichHand.right,
                                keySize: keySize.big,
                                ifShiftIsPressed: 'ShiftRight'
                            }
                        })
                    }

                    requiredPresses.push(key);
                    break;
            }
        })
    })

    return requiredPresses;
}
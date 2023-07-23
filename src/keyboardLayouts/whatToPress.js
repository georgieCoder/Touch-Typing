export function whatToPress(keyMap, letter) {
    let requiredPresses = []  

    keyMap &&
    keyMap.forEach((row) => {
        row.forEach((key) => {
            switch (letter) {
                case key.name:
                    requiredPresses.push({
                        whichKey: key.name,
                        whichHand: key.info.whichHand,
                        whichFinger: key.info.whichFinger
                    });
                    break;

                case key.info.ifShiftIsPressed:
                    if (key.info.whichHand === 'right') {
                        requiredPresses.push({
                            whichKey: 'ShiftLeft',
                            whichHand: 'left',
                            whichFinger: 'littleFinger'
                        })
                    } else {
                        requiredPresses.push({
                            whichKey: 'ShiftRight',
                            whichHand: 'right',
                            whichFinger: 'littleFinger'
                        })
                    }

                    requiredPresses.push({
                        whichKey: key.info.ifShiftIsPressed,
                        whichHand: key.info.whichHand,
                        whichFinger: key.info.whichFinger
                    });
                    break;
            }
        })
    })

    return requiredPresses;
}
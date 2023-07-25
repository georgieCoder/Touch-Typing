import { whichFinger, whichHand, keySize } from "../models/IKeyboardKey";
import { ILayout } from "../models/ILayout";

export const russianLayout: ILayout = [
    [
        {
            name: 'ё',
            info: {
                    ifShiftIsPressed: 'Ё',
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
            }
        },
        {
            name: '1',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '!'
            }
        },
        {
            name: '2',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '"'
            }
        },
        {
            name: '3',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '№'
            }
        },
        {
            name: '4',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: ';'
            }
        },
        {
            name: '5',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '%'
            }
        },
        {
            name: '6',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: ':'
            }
        },
        {
            name: '7',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '?'
            }
        },
        {
            name: '8',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '*'
            }
        },
        {
            name: '9',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '('
            }
        },
        {
            name: '0',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: ')'
            }
        },
        {
            name: '-',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '_'
            }
        },
        {
            name: '=',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: '+'
            }
        },
        {
            name: 'Backspace',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.big,
                    ifShiftIsPressed: 'Backspace'
            }
        }
    ],
    [
        {
            name: 'Tab',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.left,
                    keySize: keySize.medium,
                    ifShiftIsPressed: 'Tab'
            }
        },
        {
            name: 'й',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Й'
            }
        },
        {
            name: 'ц',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ц'
            }
        },
        {
            name: 'у',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'У'
            }
        },
        {
            name: 'к',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'К'
            }
        },
        {
            name: 'е',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Е'
            }
        },
        {
            name: 'н',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Н'
            }
        },
        {
            name: 'г',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Г'
            }
        },
        {
            name: 'ш',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ш'
            }
        },
        {
            name: 'щ',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Щ'
            }
        },
        {
            name: 'з',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'З'
            }
        },
        {        
            name: 'х',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Х'
            }
        },
        {
            name: 'ъ',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ъ'
            }
        },
        {
            name: '\\',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.medium,
                    ifShiftIsPressed: '/'
            }
        }
    ],
    [   
        {
            name: 'CapsLock',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.left,
                    keySize: keySize.big,
                    ifShiftIsPressed: 'CapsLock'
            }
        },
        {
            name: 'ф',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ф'
            }
        },
        {
            name: 'ы',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ы'
            }
        },
        {
            name: 'в',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'В'
            }
        },
        {
            name: 'а',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'А'
            }
        },
        {
            name: 'п',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'П'
            }
        },
        {
            name: 'р',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Р'
            }
        },
        {
            name: 'о',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'О'
            }
        },
        {
            name: 'л',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Л'
            }
        },
        {
            name: 'д',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Д'
            }
        },
        {
            name: 'ж',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ж'
            }
        },
        {
            name: 'э',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Э'
            }
        },
        {
            name: 'Enter',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.big,
                    ifShiftIsPressed: 'Enter'
            }
        }
    ],
    [
        {
            name: 'ShiftLeft',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.left,
                    keySize: keySize.big,
                    ifShiftIsPressed: 'ShiftLeft'
            }
        },
        {
            name: 'я',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Я'
            }
        },
        {
            name: 'ч',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ч'
            }
        },
        {
            name: 'с',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'С'
            }
        },
        {        
            name: 'м',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'М'
            }
        },
        {
            name: 'и',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.left,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'И'
            }
        },
        {
            name: 'т',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Т'
            }
        },
        {
            name: 'ь',
            info: {
                    whichFinger: whichFinger.foreFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ь'
            }
        },
        {
            name: 'б',
            info: {
                    whichFinger: whichFinger.middleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Б'
            }
        },
        {
            name: 'ю',
            info: {
                    whichFinger: whichFinger.ringFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: 'Ю'
            }
        },
        {
            name: '.',
            info: {
                    whichFinger: whichFinger.littleFinger,
                    whichHand: whichHand.right,
                    keySize: keySize.smaller,
                    ifShiftIsPressed: ','
            }
        },
        {
            name: 'ShiftRight',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.big,
                    ifShiftIsPressed: 'ShiftRight'
            }
        }
    ],
    [
        {
            name: 'Ctrl',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.left,
                    keySize: keySize.small,
                    ifShiftIsPressed: 'Ctrl'
            }
        },    
        {
            name: 'Cmd',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.left,
                    keySize: keySize.small,
                    ifShiftIsPressed:  'Cmd'
            }
        },
        {
            name: 'Alt',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.left,
                    keySize: keySize.small,
                    ifShiftIsPressed: 'Alt'
            }
        },   
        {    
            name: ' ',
            info: {
                    whichFinger: whichFinger.thumb,
                    whichHand: whichHand.left,
                    keySize: keySize.large,
                    ifShiftIsPressed: ' '
            }
        },    
        {    
            name: 'Alt',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.small,
                    ifShiftIsPressed: 'Alt'
            }
        },                            
        {    
            name: 'Cmd',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.small,
                    ifShiftIsPressed: 'Cmd'
            }
        },
        {
            name: 'Menu',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.small,
                    ifShiftIsPressed: 'Menu'
            }
        },
        {
            name: 'Ctrl',
            info: {
                    whichFinger: whichFinger.uncertain,
                    whichHand: whichHand.right,
                    keySize: keySize.small,
                    ifShiftIsPressed: 'Ctrl'
            }
        }
    ]
]


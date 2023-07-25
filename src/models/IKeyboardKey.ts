export enum keySize {
    smaller = 'smaller',
    small = 'small',
    medium = 'medium',
    big = 'big',
    bigger = 'bigger',
    large = 'large'
}

export enum whichHand {
    left = 'left',
    right = 'right'
}

export enum whichFinger {
    littleFinger = 'littleFinger',
    ringFinger = 'ringFinger',
    middleFinger = 'middleFinger',
    foreFinger = 'foreFinger',
    thumb = 'thumb',
    uncertain = 'uncertain'
}

export interface IKeyboardKey {
    name: string,
    info: {
            ifShiftIsPressed: string,
            whichFinger: whichFinger,
            whichHand: whichHand,
            keySize: keySize,
    }
}

export const counterB: any = (state: number = 0, action: any) => {
    switch (action.type) {
        case 'INCREMENTB':
            return state + 1;
        case 'DECREMENTB':
            return state - 1;
        default:
            return state
    }
}

function counterA(state: {value: number} = {value: 0}, action: any) {
    switch (action.type) {
        case 'INCREMENTA':
            return {
                ...state,
                value: state.value + 1
            };
        case 'DECREMENTA':
            return {
                ...state,
                value: state.value - 1
            };
        default:
            return state
    }
}

export default counterA;
const initialValue = {
    bgColor : '#00877C',
    pillWindowOn : true,
    isInitialOn : true
}

const allReducers = (state = initialValue, action)=>{
    switch (action.type) {
        case 'BLUE':
            return { ...state, bgColor : '#00008B' };
        case 'RED':
            return { ...state, bgColor : 'red' };
        case 'REVERT_BACK_COLOR':
            return { ...state, bgColor : '#00877C' };
        case 'PILL_WINDOW_ON':
            return { ...state, pillWindowOn : true };
        case 'PILL_WINDOW_OFF':
            return { ...state, pillWindowOn : false };
        case 'INITIAL_WINDOW_OFF':
            return { ...state, isInitialOn : false };
        case 'INITIAL_WINDOW_ON':
            return { ...state, isInitialOn : true };
        default:
            return state
    }
};

export default allReducers;

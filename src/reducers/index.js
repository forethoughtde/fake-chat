const initialValue = {
    bgColor : '#00877C',
    pillWindowOn : true,
    isInitialOn : true
}

const allReducers = (state = initialValue, action)=>{
    switch (action.type) {
        case 'BLUE':
            return { bgColor : '#00008B', pillWindowOn : state.pillWindowOn, isInitialOn : state.isInitialOn }
        case 'RED':
            return { bgColor : 'red', pillWindowOn : state.pillWindowOn, isInitialOn : state.isInitialOn }
        case 'PILL_WINDOW_ON':
            return { pillWindowOn : true, bgColor : state.bgColor, isInitialOn : state.isInitialOn };
        case 'PILL_WINDOW_OFF':
            return { pillWindowOn : false, bgColor : state.bgColor, isInitialOn : state.isInitialOn };
        case 'INITIAL_WINDOW_OFF':
            return { pillWindowOn : state.pillWindowOn, bgColor : state.bgColor, isInitialOn : false }
        case 'INITIAL_WINDOW_ON':
            return { pillWindowOn : state.pillWindowOn, bgColor : state.bgColor, isInitialOn : true }
        case 'REVERT_BACK_COLOR':
            return { bgColor : '#00877C', pillWindowOn : state.pillWindowOn, isInitialOn : state.isInitialOn }
        default:
            return state
    }
};

export default allReducers;

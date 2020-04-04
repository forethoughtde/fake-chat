const initialValue = {
    isInitialOn : true
}

const initialWindowReducer = (state = initialValue, action)=>{
    switch (action.type) {
        case 'INITIAL_WINDOW_OFF':
            return { ...state, isInitialOn : false };
        case 'INITIAL_WINDOW_ON':
            return { ...state, isInitialOn : true };
        default:
            return state
    }
};

export default initialWindowReducer;

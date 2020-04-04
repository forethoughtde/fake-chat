const initialValue = {
    pillWindowOn : true
}

const pillWindowReducer = (state = initialValue, action)=>{
    switch (action.type) {
        case 'PILL_WINDOW_ON':
            return { ...state, pillWindowOn : true };
        case 'PILL_WINDOW_OFF':
            return { ...state, pillWindowOn : false };
        default:
            return state
    }
};

export default pillWindowReducer;

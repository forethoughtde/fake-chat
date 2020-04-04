const colorInitialValue = {
    bgColor : '#00877C'
}

const changeColorReducer = (state = colorInitialValue, action)=>{
    switch (action.type) {
        case 'BLUE':
            return { ...state, bgColor : '#00008B' };
        case 'RED':
            return { ...state, bgColor : 'red' };
        case 'REVERT_BACK_COLOR':
            return { ...state, bgColor : '#00877C' };
        default:
            return state;
    }

};

export default changeColorReducer;

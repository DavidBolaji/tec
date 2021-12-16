const themeReducer = (state=0, action) => {
    if(action.type === 'NEXT') {
        if(state === 2) {
            return state = 0
        }
        return state + 1
    } else if (action.type === 'PREV') {
        if (state !== 0) {
            return state - 1;
        }
        return state = 2
    } 
    return state
}

export default themeReducer;
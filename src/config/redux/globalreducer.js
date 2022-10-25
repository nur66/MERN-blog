const initialState = {
    name: 'Nur Iswanto'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Uwais Alfarisiy'
        }
    }
    return state;
}

export default globalReducer;
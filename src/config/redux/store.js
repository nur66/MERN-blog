// digunakan untuk membuat state secara global
const { createStore } = require('redux');


const initialState = {
    dataBlogs: [],
    name: 'Nur Iswanto'
}

const reducer = (state = initialState, action) => {
    // mengubah isi dataBlog
    // action.type ini yang menentukan apa yang berubah
    if(action.type === 'UPDATE_DATA_BLOG'){
        return {
            ...state, // copy statenya
            dataBlogs: action.payload
        }
    }

    if(action.type === 'UPDATE_NAME'){
        return {
            ...state,
            name: 'Uwais Alfarisiy'
        }
    }

    return state;
}

const store = createStore(reducer);

export default store;

// digunakan untuk membuat state secara global
const { createStore } = require('redux');


const initialState = {
    dataBlog: [],
    name: 'Nur Iswanto'
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;

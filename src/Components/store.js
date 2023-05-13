import { createStore } from "redux";
const initialState = {
    inputValue:"",
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case "UPDATE_INPUT_VALUE":
            return { ...state, inputValue: action.payload }
        default:
            return state;
    }
}
const store = createStore(reducer)
export default store;
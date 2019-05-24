import { LOAD_PROGRAM } from "../actions/viewActions";

const initialState = {};

// implement get program
function viewReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PROGRAM:
            let programData = action.data;
            return Object.assign({}, state, programData);
        default:
            return state;
    }
}

export default viewReducer;
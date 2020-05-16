import {
    FETCH_DOG,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from '../actions/actionTypes'

const dogReducers = (state = {}, action) => {
    const newState = {...state};

    switch(action.type){
        case(FETCH_SUCCEEDED):
            newState.dog = action.payload.dog;
        case(FETCH_FAILED):
            newState.message = action.message;
        default:
            
    }
    console.log(newState)

    return newState;
}

export default dogReducers;
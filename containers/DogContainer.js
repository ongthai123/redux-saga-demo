import {connect} from 'react-redux';
import DogComponent from '../components/DogComponent';

import {
    FETCH_DOG,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from '../actions/actionTypes'

const mapStateToProps = (state) => {

    return {...state.dogReducers}
}

const mapDispatchToProps = (dispatch) => {

    return {
        onFetchDog: () => {
            dispatch({type: FETCH_DOG});
        }
    }
}

const DogContainer = connect(mapStateToProps, mapDispatchToProps)(DogComponent);
export default DogContainer;
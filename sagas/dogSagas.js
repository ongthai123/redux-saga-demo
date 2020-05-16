import {
    FETCH_DOG,
    FETCH_SUCCEEDED,
    FETCH_FAILED
} from '../actions/actionTypes'

import {put, takeLatest} from 'redux-saga/effects';

import {Api} from './Api'

function* fetchDog(){
    console.log("Hit saga")
    try{
        const receivedDog = yield Api.getDogFromApi();

        yield put({
            type: FETCH_SUCCEEDED, 
            payload: {
                dog: receivedDog
            }
        })
    } catch (error){
        yield put({type: FETCH_FAILED, message: error})
    }
}

export function* watchFetchDog(){
    yield takeLatest(FETCH_DOG, fetchDog)
}

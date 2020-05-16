import {call, all} from 'redux-saga/effects';

import {watchFetchDog} from './dogSagas'

export default function* rootSaga(){
    yield call(watchFetchDog);
}
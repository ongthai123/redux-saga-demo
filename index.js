/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import DogContainer from './containers/DogContainer';
import allReducers from './reducers';

import rootSaga from './sagas/rootSaga'

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

console.log("index")

const DogApp = () => {
    return (
    <Provider store={store}>
        <DogContainer/>
    </Provider>)
}

sagaMiddleware.run(rootSaga)

AppRegistry.registerComponent(appName, () => DogApp);

/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mainSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const configureStore = () => {
    const store = createStore(
        reducer,
        composeEnhancer,
    )

    sagaMiddleware.run(mainSaga)

    return store;
};

export default configureStore;
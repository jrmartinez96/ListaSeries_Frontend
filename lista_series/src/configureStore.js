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
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import reducer from './reducers';
import mainSaga from './sagas';

// SAGA
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


// PERSIST REDUCER
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['user', 'myListSeries'],
}

const persistedReducer = persistReducer(persistConfig, reducer)

// CONFIGURE STORE
const configureStore = () => {
    
    //Store
    const store = createStore(
        persistedReducer,
        composeEnhancer,
    )
    
    // Saga
    sagaMiddleware.run(mainSaga)

    // Persist Store
    const persistor = persistStore(store);

    return {store, persistor};
};

export default configureStore;
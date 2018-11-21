/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import configureStore from './configureStore';
import Root from './screens/Root';

// import * as actions from './actions';

const configStore = configureStore();
const { store, persistor } = configStore;


ReactDOM.render(
    <Root store={store} persistor={persistor} />, 
    document.getElementById('root')
);

serviceWorker.unregister();

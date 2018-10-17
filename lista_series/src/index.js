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
import Root from './components/Root';

const store = configureStore();

ReactDOM.render(
    <Root store={store} />, 
    document.getElementById('root')
);

serviceWorker.unregister();

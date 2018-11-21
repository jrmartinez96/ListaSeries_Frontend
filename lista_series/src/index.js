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

import * as actions from './actions';

const configStore = configureStore();
const { store, persistor } = configStore;

store.dispatch(actions.myListSeriesAdded("s1", "The Flash", 4.5, "My name is Barry Allen, and I am the fastest man alive...", 100, 5, "05/08/2014",1));
store.dispatch(actions.myListSeriesAdded("s2", "Arrow", 3.5, "My name is Oliver Queen. 5 years ago I was strucked on an island...", 150, 7, "05/08/2011",2));
store.dispatch(actions.myListSeriesAdding("s3"));


ReactDOM.render(
    <Root store={store} persistor={persistor} />, 
    document.getElementById('root')
);

serviceWorker.unregister();

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

const store = configureStore();
store.dispatch(actions.addSeriesToMyList("s1", "The Flash", 4.5, "My name is Barry Allen, and I am the fastest man alive..."));
store.dispatch(actions.addSeriesToMyList("s2", "Arrow", 4.5, "My name is Oliver Queen. 5 years ago I was strucked in an island..."));

store.dispatch(actions.userLogIn("asd", "asd"))

ReactDOM.render(
    <Root store={store} />, 
    document.getElementById('root')
);

serviceWorker.unregister();

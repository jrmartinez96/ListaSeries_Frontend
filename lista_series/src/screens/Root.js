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
import { Provider } from 'react-redux';
import ListaSeriesApp from './ListaSeriesApp';

const Root = ({store}) => (
    <Provider store={store}>
        <ListaSeriesApp />
    </Provider>
);

export default Root;
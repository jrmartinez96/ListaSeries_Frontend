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
import { PersistGate } from 'redux-persist/integration/react';

import ListaSeriesApp from './ListaSeriesApp';

class Root extends React.Component {
    
    render(){
        const { store, persistor } = this.props;
        return(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ListaSeriesApp />
                </PersistGate>
            </Provider>
        )
    }
}

export default Root;
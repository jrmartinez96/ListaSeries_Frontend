/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import { all, fork } from 'redux-saga/effects';
import { watchRedirect } from './redirect';
import { watchUser } from './user';
import { watchSeries } from './series';
import { watchSearchSeries } from './search-series';

function* mainSaga(){
    yield all([
        fork(watchUser),
        fork(watchRedirect),
        fork(watchSeries),
        fork(watchSearchSeries),
    ]);
}

export default mainSaga;
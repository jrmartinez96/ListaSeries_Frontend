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
import { watchUser } from './user';
import { watchRedirect } from './redirect';

function* mainSaga(){
    yield all([
        fork(watchUser),
        fork(watchRedirect),
    ]);
}

export default mainSaga;
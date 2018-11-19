/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import { put, takeEvery} from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';

function* redirectTo(action){
    const { path } = action.payload;
    yield console.log("Redirecting to: ", path);
    yield put(actions.pathRedirected(path));
}

function* finishRedirecting(action){
    yield put(actions.finishRedirected());
}

/*---------------------------------
            WATCH REDIRECT
-----------------------------------*/
export function* watchRedirect(){
    yield takeEvery(
        types.PATH_REDIRECTING,
        redirectTo
    );

    yield takeEvery(
        types.FINISH_REDIRECTING,
        finishRedirecting
    )
}
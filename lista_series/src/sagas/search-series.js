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

/*---------------------------------
            SEARCH SERIES
-----------------------------------*/
function* searchSeries(action){
    const { name } = action.payload;

    yield console.log("Series to search in database: ", name);

    //TODO: API CALL

    const seriesSearched = [
            {seriesId:"s4", name: "Serie search 1", rating: 3.0, description: "Description from searched serie 1"}, 
            {seriesId:"s5", name: "Serie search 2", rating: 3.0, description: "Description from searched serie 2"}, 
            {seriesId:"s6", name: "Serie search 3", rating: 3.0, description: "Description from searched serie 3"}
        ];

    yield put(actions.seriesSearched(name,seriesSearched));
}

/*---------------------------------
        WATCH SEARCH SERIES
-----------------------------------*/
export function* watchSearchSeries(){

    yield takeEvery(
        types.SERIES_SEARCHING,
        searchSeries
    )
}
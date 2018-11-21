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
            {seriesId:"s1", name: "The Flash", rating: 5.0, plot: "My name is Barry Allen, and I am the fastest man alive...", episodes: 24, seasons:1, releaseDate:"21/11/2018"},
            {seriesId:"s2", name: "Arrow", rating: 3.0, plot: "My name is Oliver Queen. 5 years ago I was strucked on an island...", episodes: 24, seasons:1, releaseDate:"21/11/2018"},
            {seriesId:"s3", name: "Serie search 0", rating: 3.0, plot: "Description from searched serie 0", episodes: 24, seasons:1, releaseDate:"21/11/2018"},
            {seriesId:"s4", name: "Serie search 1", rating: 3.0, plot: "Description from searched serie 1", episodes: 24, seasons:1, releaseDate:"21/11/2018",}, 
            {seriesId:"s5", name: "Serie search 2", rating: 3.0, plot: "Description from searched serie 2", episodes: 24, seasons:1, releaseDate:"21/11/2018"}, 
            {seriesId:"s6", name: "Serie search 3", rating: 3.0, plot: "Description from searched serie 3", episodes: 24, seasons:1, releaseDate:"21/11/2018"}
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
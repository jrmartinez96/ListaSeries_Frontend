/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import { put, takeEvery, call, select} from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as types from '../types';
import * as actions from '../actions';
import * as selectors from '../reducers';
import * as api from '../api';

/*---------------------------------
            SEARCH SERIES
-----------------------------------*/
function* searchSeries(action){
    const { name } = action.payload;
    const token = yield select(selectors.getUserToken);

    if(name === ""){
        yield put(actions.seriesSearched(name,[]));
    } else {
        yield console.log("Series in database: \n\tName:", name, "\n\tToken: ", token);
        
        yield put(actions.loadingDisplayChange());
        const search = yield call(api.searchSeriesApi,name,token);
        yield put(actions.loadingDisplayChange());

        if(search.status === 200){
            const { data } = search;
            
            if(data.length !== 0){
                const series = data.map(serie => {
                    const { id, release_date } = serie;
                    return {
                        ...serie, 
                        id:undefined, 
                        seriesId:id,
                        release_date:undefined,
                        releaseDate:release_date
                    };
                })
                yield put(actions.seriesSearched(name,series));
            } else {
                yield put(actions.seriesSearched(name,[]));
                yield put(actions.errorMessageChange("No series found"));
                yield put(actions.errorDisplayChange());
                yield call(delay, 3000);
                yield put(actions.errorDisplayChange());
            }

        } else {
            yield put(actions.errorMessageChange("Error in search"));
            yield put(actions.errorDisplayChange());
            yield call(delay, 3000);
            yield put(actions.errorDisplayChange());
        }

    }
    

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
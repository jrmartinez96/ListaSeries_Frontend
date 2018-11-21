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
            ADD SERIES
-----------------------------------*/
function* addSeriesToMyList(action){
    const { serie } = action.payload;
    const { seriesId } = serie;
    yield console.log("Serie ID to be added: ", seriesId);

    //TODO: API CALL

    yield put(actions.myListSeriesAdded({...serie, currentEpisode:1}))
}

/*---------------------------------
            DELETE SERIES
-----------------------------------*/
function* deleteSeriesFromMyList(action){
    const { seriesId } = action.payload;

    yield console.log("Series ID to be deleted: ", seriesId);

    //TODO: API CALL

    yield put(actions.myListSeriesDeleted(seriesId));

}

/*---------------------------------
        UPDATE ACTUAL EPISODE
-----------------------------------*/
function* updateActualEpisodeToSeries(action){
    const { seriesId, quantity } = action.payload;

    yield console.log("Update series episode, Series ID: ", seriesId, ", Quantity: ", quantity);

    //TODO: API CALL

    yield put(actions.serieActualEpisodeUpdated(seriesId,quantity));
}




/*---------------------------------
            WATCH SERIES
-----------------------------------*/
export function* watchSeries(){
    yield takeEvery(
        types.MY_LIST_SERIES_ADDING,
        addSeriesToMyList
    );

    yield takeEvery(
        types.MY_LIST_SERIES_DELETING,
        deleteSeriesFromMyList
    );

    yield takeEvery(
        types.SERIE_ACTUAL_EPISODE_UPDATING,
        updateActualEpisodeToSeries
    )
}
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
      INITIALIZE MY LIST SERIES
-----------------------------------*/
function* initializeSeriesToMyList(action){
    const { userId, token } = action.payload;
    
    const initializeSeries = yield call(api.getMyListFromUserId, userId, token);

    if(initializeSeries.status === 200){
        const { data } = initializeSeries;
        for (let i = 0; i < data.length; i++) {
            const assignment = data[i];
            const { serie_id, current_episode } = assignment;
            
            const serieCall = yield call(api.getSerieByIdApi, serie_id, token);
            
            if(serieCall.status === 200){
                const serie = serieCall.data[0];
                
                const { id, release_date } = serie;
                yield put(actions.myListSeriesAdded({
                    ...serie, 
                    id:undefined, 
                    seriesId:id,
                    release_date:undefined,
                    releaseDate:release_date,
                    currentEpisode:current_episode
                }))
            }
        }
        yield put(actions.loadingDisplayChange());
        yield put(actions.pathRedirecting("/homepage/"));
    }
}

/*---------------------------------
            ADD SERIES
-----------------------------------*/
function* addSeriesToMyList(action){
    const { serie } = action.payload;
    const { seriesId } = serie;
    const userId = yield select(selectors.getUserId);
    const token = yield select(selectors.getUserToken);
    yield console.log("Serie ID to be added: ", seriesId, "\nWith user: ", userId, "\nToken: ", token);

    yield put(actions.loadingDisplayChange());
    const assign = yield call(api.assignSeriesApi, userId, seriesId, token);
    yield put(actions.loadingDisplayChange());
    
    const { status } = assign;

    if(status === 201){
        yield put(actions.myListSeriesAdded({...serie, currentEpisode:1}))
    } else {
        yield put(actions.errorMessageChange("Error adding serie"));
        yield put(actions.errorDisplayChange());
        yield call(delay, 3000);
        yield put(actions.errorDisplayChange());
    }

}

/*---------------------------------
            DELETE SERIES
-----------------------------------*/
function* deleteSeriesFromMyList(action){
    const { seriesId } = action.payload;
    const userId = yield select(selectors.getUserId);
    const token = yield select(selectors.getUserToken);

    yield console.log("Series ID to be deleted: ", seriesId);

    yield put(actions.loadingDisplayChange());
    const deleteAssign = yield call(api.deleteAssignmentApi,userId, seriesId, token);
    yield put(actions.loadingDisplayChange());

    yield console.log(deleteAssign);

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
        types.MY_SERIES_INITIALIZING,
        initializeSeriesToMyList
    )

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
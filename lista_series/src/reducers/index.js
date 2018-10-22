/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import user from './user';
import myListSeries from './my-list-series'

import * as fromUser from './user';
import * as fromMyListSeries from './my-list-series';


/* REDUCER */
const reducer = combineReducers({
    user,
    myListSeries,
    form: formReducer,
});

export default reducer;


/* SELECTORS */

    // User
export const getIsLoggedIn = (state) => fromUser.getIsLoggedIn(state.user);

    // Series
export const getMyListSeriesById = (state, seriesId) => fromMyListSeries.getMyListSeriesById(state.myListSeries, seriesId);
export const getMyList = (state) => fromMyListSeries.getMyList(state.myListSeries);
export const getCurrentSerieInfoDisplay = (state) => fromMyListSeries.getCurrentSerieInfoDisplay(state.myListSeries);
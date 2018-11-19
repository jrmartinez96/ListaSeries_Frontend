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

import redirect from './redirect';
import user from './user';
import myListSeries from './my-list-series'
import searchSeries from './search-series';

import * as fromRedirect from './redirect';
import * as fromUser from './user';
import * as fromMyListSeries from './my-list-series';
import * as fromSearchSeries from './search-series';


/* REDUCER */
const reducer = combineReducers({
    redirect,
    user,
    myListSeries,
    searchSeries,
    form: formReducer,
});

export default reducer;


/* SELECTORS */

    //Redirect
export const getPath = (state) => fromRedirect.getPath(state.redirect);
export const getRedirectState = (state) => fromRedirect.getRedirectState(state.redirect);

    // User
export const getIsLoggedIn = (state) => fromUser.getIsLoggedIn(state.user);

    // Series
export const getMyListSeriesById = (state, seriesId) => fromMyListSeries.getMyListSeriesById(state.myListSeries, seriesId);
export const getMyList = (state) => fromMyListSeries.getMyList(state.myListSeries);
export const getCurrentSerieInfoDisplay = (state) => fromMyListSeries.getCurrentSerieInfoDisplay(state.myListSeries);

    // Search Series
export const getSeriesSearchName = (state) => fromSearchSeries.getSeriesSearchName(state.searchSeries);
export const getSeriesSearched = (state) => fromSearchSeries.getSeriesSearched(state.searchSeries);
export const getSerieSearchedById = (state) => fromSearchSeries.getSerieSearchedById(state.searchSeries);
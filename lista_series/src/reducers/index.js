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
import errorBox from './error';
import isLoading from './loading';

import * as fromRedirect from './redirect';
import * as fromUser from './user';
import * as fromMyListSeries from './my-list-series';
import * as fromSearchSeries from './search-series';
import * as fromErrorBox from './error';
import * as fromLoading from './loading';


/* REDUCER */
const reducer = combineReducers({
    redirect,
    user,
    myListSeries,
    searchSeries,
    errorBox,
    isLoading,
    form: formReducer,
});

export default reducer;


/* SELECTORS */

    //Redirect
export const getPath = (state) => fromRedirect.getPath(state.redirect);
export const getRedirectState = (state) => fromRedirect.getRedirectState(state.redirect);

    // User
export const getIsLoggedIn = (state) => fromUser.getIsLoggedIn(state.user);
export const getUserToken = (state) => fromUser.getUserToken(state.user);
export const getUserId = (state) => fromUser.getUserId(state.user);

    // Series
export const getMyListSeriesById = (state, seriesId) => fromMyListSeries.getMyListSeriesById(state.myListSeries, seriesId);
export const getMyList = (state) => fromMyListSeries.getMyList(state.myListSeries);
export const getCurrentSerieInfoDisplay = (state) => fromMyListSeries.getCurrentSerieInfoDisplay(state.myListSeries);

    // Search Series
export const getSeriesSearchName = (state) => fromSearchSeries.getSeriesSearchName(state.searchSeries);
export const getSeriesSearched = (state) => fromSearchSeries.getSeriesSearched(state.searchSeries);
export const getSerieSearchedById = (state, serieId) => fromSearchSeries.getSerieSearchedById(state.searchSeries, serieId);

    // ErrorBox
export const getErrorMessage = (state) => fromErrorBox.getErrorMessage(state.errorBox);
export const getErrorDisplay = (state) => fromErrorBox.getErrorDisplay(state.errorBox);

    // Loading
export const getIsLoading = (state) => fromLoading.getIsLoading(state)
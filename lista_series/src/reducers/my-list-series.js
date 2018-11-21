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
import * as types from '../types';

// By Id
const byId = (state={}, action) => {
    switch (action.type) {
        case types.MY_LIST_SERIES_ADDED:{
            const { seriesId } = action.payload;

            return {...state, [seriesId]: action.payload};
        }

        case types.MY_LIST_SERIES_DELETED: {
            const { seriesId } = action.payload;

            return {...state, [seriesId]: undefined};
        }

        case types.SERIE_ACTUAL_EPISODE_UPDATED: {
            const { seriesId, quantity } = action.payload;

            const prevSerieObject = state[seriesId];
            const newSerieObject = {...prevSerieObject, currentEpisode: prevSerieObject["currentEpisode"] + quantity }
            return {...state, [seriesId]: newSerieObject}
        }
    
        default:
            return state;
    }
}

// Order
const order = (state=[], action) => {
    switch (action.type) {
        case types.MY_LIST_SERIES_ADDED:{
            const { seriesId } = action.payload;

            return [...state, seriesId];
        }

        case types.MY_LIST_SERIES_DELETED:{
            const { seriesId } = action.payload;

            return state.filter(id => seriesId !== id);
        }
    
        default:
            return state;
    }
}

// Current Series Info
const currentSerieInfoDisplay = (state="", action) => {
    switch (action.type) {
        case types.CURRENT_SERIE_INFO_DISPLAY_UPDATED:{
            const { serieId } = action.payload;
            return serieId;
        }
    
        default:
            return state;
    }
}

// Combine reducers

export default combineReducers({
    byId,
    order,
    currentSerieInfoDisplay,
})

/* SELECTORS */

export const getMyListSeriesById = (state, seriesId) => state.byId[seriesId];
export const getMyList = (state) => state.order;
export const getCurrentSerieInfoDisplay = (state) => state.currentSerieInfoDisplay;
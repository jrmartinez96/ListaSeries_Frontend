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

/* REDUCERS */
const nameSearch = (state="", action) => {
    switch (action.type) {
        case types.SERIES_SEARCHED:{
            const { searchName } = action.payload;
            return searchName;
        }
    
        default:
            return state;
    }
}

const byId = (state={}, action) => {
    switch (action.type) {
        case types.SERIES_SEARCHED:{
            const { series } = action.payload;
            
            let seriesById = {};

            series.map((serie) => {
                const { seriesId } = serie;

                seriesById = {...seriesById, [seriesId]: serie};

                return serie;
            });

            return seriesById;
        }
    
        default:
            return state;
    }
}

const orderById = (state=[], action) => {
    switch (action.type) {
        case types.SERIES_SEARCHED:{
            const { series } = action.payload;

            let order = [];

            series.map(serie => {
                const { seriesId } = serie;

                order = [...order, seriesId];

                return serie;
            })

            return order;
        }
    
        default:
            return state;
    }
}

export default combineReducers({
    nameSearch,
    byId,
    orderById,
})

/* SELECTORS */

export const getSeriesSearchName = (state) => state.nameSearch;
export const getSeriesSearched = (state) => state.orderById;
export const getSerieSearchedById = (state, serieId) => state.byId[serieId];

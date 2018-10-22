/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import * as types from '../types';


/*---------------------------------------------
                    USER 
-----------------------------------------------*/
// Register
export const userRegister = (name, username, email, password) => (
    {
        type: types.USER_REGISTERED,
        payload: {
            name,
            username,
            email,
            password
        }
    }
);

// Login
export const userLogIn = (email, password) => (
    {
        type: types.USER_LOGGED_IN,
        payload: {
            email,
            password
        }
    }
);

// Logout
export const userLogOut = () => (
    {
        type: types.USER_LOGGED_OUT,
        payload : {}
    }
)

// Download Data
export const userDownloadData = (name, username, email, password) => (
    {
        type: types.USER_DATA_DOWNLOADED,
        payload: {
            name, 
            username,
            email,
            password
        }
    }
);


/*---------------------------------------------
                    SERIES 
-----------------------------------------------*/

// Add series to my list
export const addSeriesToMyList = (seriesId, name, rating, description) => (
    {
        type: types.MY_LIST_SERIES_ADDED,
        payload: {
            seriesId,
            name,
            rating,
            description
        }
    }
);

// Delete series to my list
export const deleteSeriesToMyList = (seriesId) => (
    {
        type: types.MY_LIST_SERIES_DELETED,
        payload: {
            seriesId,
        }
    }
);

// Update actual episode to a Series
export const updateSeriesActualEpisode = (seriesId, actualEspisode, add) => (
    {
        type: types.SERIE_ACTUAL_EPISODE_UPDATED,
        payload: {
            seriesId,
            actualEspisode,
            add
        }
    }
)

// Update current serie info displayed
export const updateCurrentSerieInfo = (serieId) => (
    {
        type: types.CURRENT_SERIE_INFO_DISPLAY_UPDATED,
        payload: {
            serieId
        }
    }
)
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

/*===========================================================
                        STATE ACTIONS
=============================================================*/
/** 
 * !----------------------------------
 *                REDIRECTING
 * !----------------------------------
 */

export const pathRedirected = (path) => (
    {
        type: types.PATH_REDIRECTED,
        payload:{
            path,
        }
    }
)

export const finishRedirected = () => (
    {
        type: types.FINISH_REDIRECTED,
        payload: {}
    }
)

/** 
 * !----------------------------------
 *                USER
 * !----------------------------------
 */

// * Register
export const userRegistered = (success) => (
    {
        type: types.USER_REGISTERED,
        payload: {
            success,
        }
    }
)

// * Login
export const userLoggedIn = (name, username, email, password) => (
    {
        type: types.USER_LOGGED_IN,
        payload: {
            name,
            username,
            email,
            password
        }
    }
)

// * Logout
export const userLoggedOut = () => (
    {
        type: types.USER_LOGGED_OUT,
        payload : {}
    }
)


/**
* !---------------------------------------------
                    SERIES 
* !---------------------------------------------
*/

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


/*===========================================================
                        SAGA ACTIONS
=============================================================*/

/** 
 * !----------------------------------
 *                REDIRECTING
 * !----------------------------------
 */
export const pathRedirecting = ( path ) => (
    {
        type: types.PATH_REDIRECTING,
        payload:{
            path,
        }
    }
)

export const finishRedirecting = () => (
    {
        type: types.FINISH_REDIRECTING,
        payload: {}
    }
)

/** 
 * !----------------------------------
 *                USER
 * !----------------------------------
 */

// * Register
export const userRegistering = (name, username, email, password) => (
    {
        type: types.USER_REGISTERING,
        payload: {
            name,
            username,
            email,
            password
        }
    }
);

// * Login
export const userLogginIn = (username, password) => (
    {
        type: types.USER_LOGGIN_IN,
        payload: {
            username,
            password
        }
    }
);

// * Logout
export const userLogginOut = () => (
    {
        type: types.USER_LOGGIN_OUT,
        payload : {}
    }
)
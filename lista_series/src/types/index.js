/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

/*====================================
                STATE TYPES
======================================*/

//REDIRECTING
export const PATH_REDIRECTED = "PATH_REDIRECTED";
export const FINISH_REDIRECTED = "FINISH_REDIRECTED";

// ERROR BOX
export const ERROR_MESSAGE_CHANGED = "ERROR_MESSAGE_CHANGED";
export const ERROR_DISPLAY_CHANGED = "ERROR_DISPLAY_CHANGED";

// LOADING ICON
export const LOADING_DISPLAY_CHANGED = "LOADING_DISPLAY_CHANGED";

// USER
export const USER_REGISTERED = "USER_REGISTERED";
export const USER_LOGGED_IN = "USER_LOGGED_IN";
export const USER_LOGGED_OUT = "USER_LOGGED_OUT";

//SERIES
export const MY_LIST_SERIES_ADDED = "MY_LIST_SERIES_ADDED";
export const MY_LIST_SERIES_DELETED = "MY_LIST_SERIES_DELETED";
export const SERIE_ACTUAL_EPISODE_UPDATED = "ACTUAL_EPISODE_UPDATED";
export const CURRENT_SERIE_INFO_DISPLAY_UPDATED = "CURRENT_SERIE_INFO_DISPLAY_UPDATED";

//SEARCH SERIES
export const SERIES_SEARCHED = "SERIES_SEARCHED";

/*====================================
                SAGA TYPES
======================================*/
//REDIRECTING
export const PATH_REDIRECTING = "PATH_REDIRECTING";
export const FINISH_REDIRECTING = "FINISH_REDIRECTING";

//USER
export const USER_REGISTERING = "USER_REGISTERING";
export const USER_LOGGIN_IN = "USER_LOGGIN_IN";
export const USER_LOGGIN_OUT = "USER_LOGGIN_OUT";

//SERIES
export const MY_SERIES_INITIALIZING = "MY_SERIES_INITIALIZING";
export const MY_LIST_SERIES_ADDING = "MY_LIST_SERIES_ADDING";
export const MY_LIST_SERIES_DELETING = "MY_LIST_SERIES_DELETING";
export const SERIE_ACTUAL_EPISODE_UPDATING = "SERIE_ACTUAL_EPISODE_UPDATING";

//SEARCH SERIES
export const SERIES_SEARCHING = "SERIES_SEARCHING";
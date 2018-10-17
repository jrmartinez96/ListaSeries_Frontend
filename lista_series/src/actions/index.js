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


/*-----------------
    USER REGISTER
------------------- */
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


/*-----------------
    USER LOGIN
------------------- */
export const userLogIn = (email, password) => (
    {
        type: types.USER_LOGGED_IN,
        payload: {
            email,
            password
        }
    }
);

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
)
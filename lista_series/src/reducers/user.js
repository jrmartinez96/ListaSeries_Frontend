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

const currentUser = (state={}, action) => {
    switch (action.type) {
        case types.USER_DATA_DOWNLOADED:{
            
            return action.payload;
        }
    
        default:
            return state;
    }
};

const user = combineReducers({
    currentUser,
});

export default user;
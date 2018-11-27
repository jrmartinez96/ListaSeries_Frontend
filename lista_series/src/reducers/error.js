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

const errorMessage = (state="", action) => {
    switch (action.type) {
        case types.ERROR_MESSAGE_CHANGED:{
            const { message } = action.payload;

            return message;
        }
    
        default:
            return state;
    }
}

const errorDisplay = (state=false, action) => {
    switch (action.type) {
        case types.ERROR_DISPLAY_CHANGED:{
            if(state){
                return false;
            } else {
                return true
            }
        }
    
        default:
            return state;
    }
}

const errorBox = combineReducers({
    errorMessage,
    errorDisplay
});

export default errorBox;

/* SELECTORS */
export const getErrorMessage = (state) => state.errorMessage;
export const getErrorDisplay = (state) => state.errorDisplay;
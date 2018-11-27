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

const isLoading = (state=false, action) =>{
    switch (action.type) {
        case types.LOADING_DISPLAY_CHANGED:{
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

export default isLoading;

/* SELECTORS */
export const getIsLoading = (state) => state.isLoading;
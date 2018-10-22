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

import user from './user';
import * as fromUser from './user';

const reducer = combineReducers({
    user,
    form: formReducer,
});

export default reducer;


/* SELECTORS */
export const getIsLoggedIn = (state) => fromUser.getIsLoggedIn(state.user);
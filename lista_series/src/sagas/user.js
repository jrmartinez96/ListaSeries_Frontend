/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import { put, takeEvery, call} from 'redux-saga/effects';

import * as types from '../types';
import * as actions from '../actions';
import * as api from '../api';

/*---------------------------------
                LOG IN
-----------------------------------*/
function* logInUser(action){
    const { username, password } = action.payload;

    const login = yield call(api.loginUserApi, username, password);
    
    if(login.data){
        const { token, user} = login.data;
        const { username, user_id, email} = user;

        yield put(actions.userLoggedIn(token, username,email, user_id));
    } else {
        yield console.log("Error login");
    }
}


/*---------------------------------
                Register
-----------------------------------*/
function* registerUser(action){
    const { name, username, email, password } = action.payload;

    yield console.log("Nombre: ", name, ", Username: ", username, ", Email: ", email, ", Password: ", password)

    //TODO: Api call

    yield put(actions.pathRedirecting("/"));
}

/*---------------------------------
              LOG OUT
-----------------------------------*/
function* logOutUser(action){
    
    yield console.log("User Loggin Out");

    yield put(actions.userLoggedOut());
}

/*---------------------------------
            WATCH USER
-----------------------------------*/
export function* watchUser(){
    yield takeEvery(
        types.USER_LOGGIN_IN,
        logInUser
    );

    yield takeEvery(
        types.USER_REGISTERING,
        registerUser
    );

    yield takeEvery(
        types.USER_LOGGIN_OUT,
        logOutUser
    )
}
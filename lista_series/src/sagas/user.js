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
import { delay } from 'redux-saga';

import * as types from '../types';
import * as actions from '../actions';
import * as api from '../api';

/*---------------------------------
                LOG IN
-----------------------------------*/
function* logInUser(action){
    const { username, password } = action.payload;

    yield put(actions.loadingDisplayChange());
    const login = yield call(api.loginUserApi, username, password);
    
    if(login.data){
        const { token, user} = login.data;
        const { username, user_id, email} = user;

        yield put(actions.userLoggedIn(token, username,email, user_id));
        yield put(actions.myListSeriesInitializing(user_id, token));
    } else {
        yield put(actions.loadingDisplayChange());
        yield put(actions.errorMessageChange("Unable to login with provided credentials"));
        yield put(actions.errorDisplayChange());
        yield call(delay,3000);
        yield put(actions.errorDisplayChange());
    }
}


/*---------------------------------
                Register
-----------------------------------*/
function* registerUser(action){
    const {username, email, password } = action.payload;

    yield put(actions.loadingDisplayChange());
    const register = yield call(api.registerUserApi, username, email, password);
    yield put(actions.loadingDisplayChange());
    if(register.data){
        const { status } = register;
        if(status === 201){
            yield put(actions.errorMessageChange("User Created"));
            yield put(actions.errorDisplayChange());
            yield put(actions.pathRedirecting("/"));
            yield call(delay,3000);
            yield put(actions.errorDisplayChange());
        } else {
            yield put(actions.errorMessageChange("Username or email already exist"));
            yield put(actions.errorDisplayChange());
            yield call(delay,3000);
            yield put(actions.errorDisplayChange());
        }
    }
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
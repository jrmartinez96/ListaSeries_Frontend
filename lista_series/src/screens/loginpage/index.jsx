/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/NavBar';
import LoginForm from '../../components/LoginForm';
import * as screenNames from '../screenNames';

// import * as actions from '../../actions';
import * as stateSelectors from '../../reducers';

class loginPage extends React.Component {

    render(){


        return(
            <div>
                <NavBar>{screenNames.LOGIN_PAGE_NAME}</NavBar>
                <LoginForm />
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isLoggedIn: stateSelectors.getIsLoggedIn(state)
    }
)

// const mapDispatchToProps = (dispatch) => (
//     {
//         redirectTo: (path) => {
//             dispatch(actions.pathRedirecting(path));
//         }
//     }
// )

const LoginPage = connect(mapStateToProps, null)(loginPage);

export default LoginPage;
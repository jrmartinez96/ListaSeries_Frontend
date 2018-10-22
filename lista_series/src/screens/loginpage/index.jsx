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
import { Redirect } from 'react-router-dom';

import NavBar from '../../components/NavBar';
import LoginForm from '../../components/LoginForm';
import * as screenNames from '../screenNames';

import * as stateSelectors from '../../reducers';

class loginPage extends React.Component {

    render(){
        const { isLoggedIn } = this.props;
        
        if(isLoggedIn){
            return <Redirect to='/homepage/' />
        }


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

const LoginPage = connect(mapStateToProps, null)(loginPage);

export default LoginPage;
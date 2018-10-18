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
import NavBar from '../../components/NavBar';

import LoginForm from '../../components/LoginForm'

class LoginPage extends React.Component {

    render(){

        return(
            <div>
                <NavBar>Log In</NavBar>
                <LoginForm />
            </div>
        );
    }
}

export default LoginPage;
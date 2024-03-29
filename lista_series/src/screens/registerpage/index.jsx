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
import RegisterForm from '../../components/RegisterForm';
import * as screenNames from '../screenNames';

class RegisterPage extends React.Component {

    render(){

        return(
            <div>
                <NavBar>{screenNames.REGISTER_PAGE_NAME}</NavBar>
                <RegisterForm />
            </div>
        );
    }
}

export default RegisterPage;
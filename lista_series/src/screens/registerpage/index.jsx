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

class RegisterPage extends React.Component {

    render(){

        return(
            <div>
                <NavBar>Register</NavBar>
                <RegisterForm />
            </div>
        );
    }
}

export default RegisterPage;
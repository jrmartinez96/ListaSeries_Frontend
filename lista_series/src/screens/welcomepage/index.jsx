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

import CostumizeLink from '../../components/CostumizeLink';
import NavBar from '../../components/NavBar';

import './welcomepage.css';

class WelcomePage extends React.Component {

    render(){

        return(
            <div>
                <NavBar>Welcome!</NavBar>
                <div className="buttons-box">
                    <div className="login-button-box">
                        <CostumizeLink to="/login/"> Login </CostumizeLink>
                    </div>
                    <div className="register-button-box">
                        <CostumizeLink to="/register/"> Register </CostumizeLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomePage;
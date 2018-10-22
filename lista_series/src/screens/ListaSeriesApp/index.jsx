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
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WelcomePage from '../welcomepage';
import LoginPage from '../loginpage';
import RegisterPage from '../registerpage';
import HomePage from '../homepage';

class ListaSeriesApp extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={WelcomePage} />
                        <Route exact path="/login/" component={LoginPage} />
                        <Route exact path="/register/" component={RegisterPage} />
                        <Route exact path="/homepage/" component={HomePage} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default ListaSeriesApp;
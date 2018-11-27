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
import { BrowserRouter, Route } from 'react-router-dom';

import Redirecting from '../../components/Redirecting';
import ErrorBox from '../../components/ErrorBox';
import Loading from '../../components/Loading';
import WelcomePage from '../welcomepage';
import LoginPage from '../loginpage';
import RegisterPage from '../registerpage';
import HomePage from '../homepage';
import EpisodePage from '../episodepage';
import Searchpage from '../searchpage';

import './lista-series-app.css';


class ListaSeriesApp extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <div className="router-container">
                        <Route path="/" component={Redirecting} />
                        <Route path="/" component={ErrorBox} />
                        <Route path="/" component={Loading} />
                        <Route exact path="/" component={WelcomePage} />
                        <Route exact path="/login/" component={LoginPage} />
                        <Route exact path="/register/" component={RegisterPage} />
                        <Route exact path="/homepage/" component={HomePage} />
                        <Route exact path="/homepage-:serieId/" component={HomePage} />
                        <Route exact path="/homepage-:serieId/:episodeId/" component={EpisodePage} />
                        <Route exact path="/searchpage/" component={Searchpage} />
                        <Route exact path="/searchpage/:searchName" component={Searchpage} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default ListaSeriesApp;
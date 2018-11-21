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

import './episodepage.css';

import NavBar from '../../components/NavBar';
import CurrentEpisode from '../../components/MyList/SeriesInfo/CurrentEpisode';
import * as screenNames from '../screenNames';

class episodePage extends React.Component{

    render(){
        return(
            <div>
                <NavBar>{screenNames.EPISODE_PAGE_NAME}</NavBar>
                <CurrentEpisode />
            </div>
        )
    }
}

const EpisodePage = connect(null, null)(episodePage);

export default EpisodePage;
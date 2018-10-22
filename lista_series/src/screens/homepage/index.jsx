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

import './homepage.css';

import NavBar from '../../components/NavBar';
import MyList from '../../components/MyList';
import * as screenNames from '../screenNames';

class homePage extends React.Component {

    render(){
        return(
            <div>
                <NavBar>{screenNames.HOME_PAGE_NAME}</NavBar>
                <MyList />
            </div>
        )
    }
}

const HomePage = connect(null, null)(homePage);

export default HomePage;
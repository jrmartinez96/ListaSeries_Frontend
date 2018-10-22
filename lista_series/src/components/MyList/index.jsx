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

import SeriesList from './SeriesList';
import SeriesInfo from './SeriesInfo';

import './my-list.css';

class MyList extends React.Component {

    render(){

        return(
            <div className="my-list">
                <div className="my-list-box">
                    <SeriesList />
                    <SeriesInfo />
                </div>
            </div>
        )
    }
}

export default MyList;
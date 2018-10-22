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

import './series-info.css';

class seriesInfo extends React.Component {

    render(){
        return(
            <div className="series-info-box">

            </div>
        )
    }
}

const SeriesInfo = connect(null, null)(seriesInfo);

export default SeriesInfo;

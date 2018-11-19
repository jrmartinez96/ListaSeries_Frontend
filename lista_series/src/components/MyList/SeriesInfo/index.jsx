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

import Rating from './Rating'
import * as stateSelectors from '../../../reducers';

import './series-info.css';

class seriesInfo extends React.Component {



    render(){
        const { appState } = this.props;
        const serieId = stateSelectors.getCurrentSerieInfoDisplay(appState);
        const serie = stateSelectors.getMyListSeriesById(appState, serieId);

        if(serie === undefined){
            return(
                <div className="series-info-box">
                    No serie
                </div>
            )
        }
        

        return(
            <div className="series-info-box">
                <div className="serie-name">
                    {serie.name}
                </div>
                <div className="serie-rating">
                    <Rating ratingNumber={serie.rating} />
                </div>
                <div className="serie-description">
                    {serie.plot}
                </div>
                <div className="serie-actual-episode-container">
                    {}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
    }
)

const SeriesInfo = connect(mapStateToProps, null)(seriesInfo);

export default SeriesInfo;

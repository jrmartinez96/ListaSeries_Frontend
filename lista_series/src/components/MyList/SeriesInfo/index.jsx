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
import { Link } from 'react-router-dom';

import Rating from './Rating'
import * as stateSelectors from '../../../reducers';
import * as actions from '../../../actions';

import './series-info.css';

class seriesInfo extends React.Component {

    onUpdateCurrentEpisode = (seriesId, quantity) => {
        const { updateCurrentEpisode } = this.props;

        updateCurrentEpisode(seriesId, quantity);
    }

    render(){
        const { appState } = this.props;
        const serieId = stateSelectors.getCurrentSerieInfoDisplay(appState);
        const serie = stateSelectors.getMyListSeriesById(appState, serieId);

        if(serie === undefined){
            return(
                <div className="series-info-box">
                    <div className="serie-name">
                        No serie
                    </div>
                </div>
            )
        }
        

        const { name, total_rating, seasons, releaseDate, plot, currentEpisode} = serie;

        return(
            <div className="series-info-box">
                <div className="serie-name">
                    {name}
                </div>

                <div className="serie-rating">
                    <Rating ratingNumber={total_rating} />
                </div>

                <div className="serie-season-release">
                    Seasons: {seasons}
                    <br/>
                    Release Date: {releaseDate}
                </div>

                <div className="serie-description">
                    {plot}
                </div>

                <div className="episode-serie">
                    <button className="episode-button" onClick={()=>this.onUpdateCurrentEpisode(serieId, -1)}>{"<<"}</button>
                    <Link to={`/homepage-${serieId}/${currentEpisode}`}>Episode {currentEpisode} </Link>
                    <button className="episode-button" onClick={()=>this.onUpdateCurrentEpisode(serieId, 1)}>{">>"}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        updateCurrentEpisode: (seriesId, quantity) => {
            dispatch(actions.serieActualEpisodeUpdating(seriesId, quantity));
        }
    }
)

const SeriesInfo = connect(mapStateToProps, mapDispatchToProps)(seriesInfo);

export default SeriesInfo;

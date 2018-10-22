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

import * as stateSelectors from '../../../reducers';

import './series-info.css';

class seriesInfo extends React.Component {

    render(){
        const { appState } = this.props;
        const serieId = stateSelectors.getCurrentSerieInfoDisplay(appState);

        if(serieId===""){
            return(
                <div className="series-info-box">
                    No serie
                </div>
            )
        }

        const serie = stateSelectors.getMyListSeriesById(appState, serieId);

        return(
            <div className="series-info-box">
                {serie.name}
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

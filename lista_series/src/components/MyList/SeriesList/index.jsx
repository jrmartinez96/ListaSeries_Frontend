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

import SeriesListItem from './SeriesListItem';
import * as stateSelectors from '../../../reducers';

import './series-list.css';

class seriesList extends React.Component {

    render(){
        const { appState } = this.props;
        const seriesOrder = stateSelectors.getMyList(appState);
        return(
            <div className="series-list-box">
                {seriesOrder.map(id => {
                    const seriesInfo = stateSelectors.getMyListSeriesById(appState, id);
                    const { name } = seriesInfo;
                    return <SeriesListItem seriesName={name} key={id}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
    }
)

const SeriesList = connect(mapStateToProps, null)(seriesList);

export default SeriesList;
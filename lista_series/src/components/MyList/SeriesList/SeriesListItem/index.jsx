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


import * as stateSelectors from '../../../../reducers';
import * as actions from '../../../../actions';

import './series-list-item.css'

class seriesListItem extends React.Component {

    onCurrentItemClick = () => {
        const { onItenClick, serieId } = this.props;
        onItenClick(serieId);
    }

    xClick = () => {
        const { onDeleteClick, serieId } = this.props;
        onDeleteClick(serieId);
    }

    render(){
        const { appState, serieId } = this.props;
        const serie = stateSelectors.getMyListSeriesById(appState,serieId);
        const { name } = serie;
        return(
            <div className="series-list-item-box" onClick={this.onCurrentItemClick}>
                <div className="series-name">
                    {name}
                </div>

                <div className="delete-series-box">
                    <div className="x-button" onClick={this.xClick}> x </div>
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
        onItenClick: (serieId) => {
            dispatch(actions.updateCurrentSerieInfo(serieId));
        },
        onDeleteClick: (serieId) => {
            dispatch(actions.deleteSeriesToMyList(serieId));
        }
    }
)

const SeriesListItem = connect(mapStateToProps, mapDispatchToProps)(seriesListItem);

export default SeriesListItem;
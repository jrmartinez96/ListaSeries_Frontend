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
        const { onDeleteClick, serieId, currentSerieInfo, redirectTo } = this.props;
        onDeleteClick(serieId);

        if(currentSerieInfo === serieId){
            redirectTo("/homepage/");
        }
    }

    render(){
        const { appState, serieId, currentSerieInfo } = this.props;
        const serie = stateSelectors.getMyListSeriesById(appState,serieId);
        const { name } = serie;
        return(
            <div className={`series-list-item-box ${serieId === currentSerieInfo ? "selected":""}`}>
                <div className="series-name"  onClick={this.onCurrentItemClick}>
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
        currentSerieInfo: stateSelectors.getCurrentSerieInfoDisplay(state),
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        onItenClick: (serieId) => {
            dispatch(actions.pathRedirecting(`/homepage-${serieId}`));
        },
        onDeleteClick: (serieId) => {
            dispatch(actions.myListSeriesDeleting(serieId));
            dispatch(actions.updateCurrentSerieInfo(""))
        },
        redirectTo: (path) => {
            dispatch(actions.pathRedirecting(path));
        }
    }
)

const SeriesListItem = connect(mapStateToProps, mapDispatchToProps)(seriesListItem);

export default SeriesListItem;
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


import * as selectors from '../../../reducers';
import * as actions from '../../../actions';

import './search-list-item.css'

class searchListItem extends React.Component {

    addClick = () => {
        const { onAddClick, serieId } = this.props;
        onAddClick(serieId);
    }

    render(){
        const { appState, serieId } = this.props;
        const serie = selectors.getSerieSearchedById(appState,serieId);
        const { name } = serie;

        let disable = false;
        const serieInMyList = selectors.getMyListSeriesById(appState, serieId);
        if(serieInMyList !== undefined){
            disable = true;
        }

        return(
            <div className="search-list-item-box">
                <div className="series-name">
                    {name}
                </div>

                <div className="add-series-box">
                    <div className={`add-button ${disable ? "disable": ""}`} onClick={()=> disable ? console.log("Button is disable, serie is already in my list"): this.addClick()}> + </div>
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
        onAddClick: (serieId) => {
            dispatch(actions.myListSeriesAdding(serieId))
        },
        redirectTo: (path) => {
            dispatch(actions.pathRedirecting(path));
        }
    }
)

const SearchListItem = connect(mapStateToProps, mapDispatchToProps)(searchListItem);

export default SearchListItem;
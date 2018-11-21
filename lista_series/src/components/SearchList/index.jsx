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

import SearchListItem from './SearchListItem';
import * as selectors from '../../reducers';

import './search-list.css';

class searchList extends React.Component {

    render(){
        const { appState } = this.props;
        const seriesOrder = selectors.getSeriesSearched(appState);
        return(
            <div className="search-list-box">
                {seriesOrder.map(id => {
                    return <SearchListItem serieId={id} key={id} />
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

const SearchList = connect(mapStateToProps, null)(searchList);

export default SearchList;
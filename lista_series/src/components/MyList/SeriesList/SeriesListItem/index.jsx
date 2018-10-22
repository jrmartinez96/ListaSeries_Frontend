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

import './series-list-item.css'

const SeriesListItem = ({seriesName}) => (
    <div className="series-list-item-box">
        <div className="series-name">
            {seriesName}
        </div>

        <div className="delete-series-box">
            <div className="x-button"> x </div>
        </div>
    </div>
)

export default SeriesListItem;
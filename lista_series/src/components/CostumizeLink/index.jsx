/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import React from 'react'
import { Link } from 'react-router-dom';

import './costumize-link.css';

const CostumizeLink = ({to, children}) => (
    <Link to={to} className="costumize-link">
        <div className="costumize-button">
            {children}
        </div>
    </Link>
);

export default CostumizeLink;
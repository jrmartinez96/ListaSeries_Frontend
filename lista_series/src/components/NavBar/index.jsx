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

import './nav-bar.css';

const NavBar = ({children}) => (
    <div className="nav-bar-box">
        <div className="app-title">
            ListaSeries
        </div>
        <div className="page-title">
            {children}
        </div>
    </div>
)

export default NavBar;
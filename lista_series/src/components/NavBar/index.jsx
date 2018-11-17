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
import { Redirect } from 'react-router-dom';

import * as stateSelectors from '../../reducers';
import * as actions from '../../actions';
import * as screenNames from '../../screens/screenNames';

import './nav-bar.css';

class navBar extends React.Component {

    render(){
        const { isLoggedIn, logOut, children } = this.props;

        if(!isLoggedIn && (children !== screenNames.LOGIN_PAGE_NAME && children !== screenNames.REGISTER_PAGE_NAME && children !== screenNames.WELCOME_PAGE_NAME )){
            return <Redirect to="/" />
        } else if(isLoggedIn && (children === screenNames.LOGIN_PAGE_NAME || children === screenNames.REGISTER_PAGE_NAME || children === screenNames.WELCOME_PAGE_NAME )){
            return <Redirect to="/homepage/" />
        }
        console.log(children)

        return(
            <div className="nav-bar-box">
                <div className="app-title">
                    ListaSeries
                </div>
        
                <div className="page-title">
                    {children}
                </div>
        
                {isLoggedIn ? <button className="log-out-button" onClick={() => logOut()}> Log Out</button> : ""}
            </div>
        );
    }
}

const mapStateToProps = (state) => (
    {
        isLoggedIn: stateSelectors.getIsLoggedIn(state)
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        logOut: () => {
            dispatch(actions.userLoggedOut());
        },
    }
)

const NavBar = connect(mapStateToProps, mapDispatchToProps)(navBar);

export default NavBar;
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

import * as selectors from '../../reducers';

import './error-box.css'

class errorBox extends React.Component{

    render(){
        const { errorMessage, errorDisplay } = this.props;

        if(errorDisplay){
            return(
                <div className="error-box">
                    {errorMessage}
                </div>
            )
        } 

        return(
            <div></div>
        )
    }

}

const mapStateToProps = (state) => (
    {
        errorMessage: selectors.getErrorMessage(state),
        errorDisplay: selectors.getErrorDisplay(state)
    }
)

const ErrorBox = connect(mapStateToProps, null)(errorBox);

export default ErrorBox;
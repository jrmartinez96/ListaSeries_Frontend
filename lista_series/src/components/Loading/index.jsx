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
import { HashLoader } from 'react-spinners';

import * as selectors from '../../reducers';

import './loading.css';

class loading extends React.Component {

    render(){
        const { isLoading } = this.props;

        if(isLoading){
            return(
                <div className="loading-container">
                    <HashLoader
                        color={'#bd5077'}
                        sizeUnit={"px"}
                        size={100}
                    />
                    <div className="loading-text">
                        Loading
                    </div>
                </div>
            )
        }

        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) =>(
    {
        isLoading: selectors.getIsLoading(state),
    }
)

const Loading = connect(mapStateToProps, null)(loading);

export default Loading;
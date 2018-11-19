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

import './homepage.css';

import NavBar from '../../components/NavBar';
import MyList from '../../components/MyList';

import * as screenNames from '../screenNames';
import * as actions from '../../actions';
import * as selectors from '../../reducers';

class homePage extends React.Component {

    componentDidMount(){
        const { serieId } = this.props.match.params;
        const { appState, changeSerieInfo, redirectTo } = this.props;
        if(serieId !== undefined){
            const serie = selectors.getMyListSeriesById(appState, serieId);
            if(serie === undefined){
                changeSerieInfo("");
                alert("Serie is not added or doesn't exist \nRedirecting to /homepage");
                redirectTo("/homepage/");
            } else {
                changeSerieInfo(serieId);
            }
        } else {
            changeSerieInfo("");
        }
    }

    componentWillReceiveProps(newProps){
        const { serieId } = newProps.match.params;
        const { changeSerieInfo } = this.props;
        if(serieId !== undefined){
            changeSerieInfo(serieId);
        } else {
            changeSerieInfo("");
        }
    }

    render(){
        
        return(
            <div>
                <NavBar>{screenNames.HOME_PAGE_NAME}</NavBar>
                <MyList />
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        changeSerieInfo: (serieId) => {
            if(serieId !== undefined){
                dispatch(actions.updateCurrentSerieInfo(serieId))
            }
        },

        redirectTo: (path) => {
            dispatch(actions.pathRedirecting(path));
        }
    }
)

const HomePage = connect(mapStateToProps, mapDispatchToProps)(homePage);

export default HomePage;
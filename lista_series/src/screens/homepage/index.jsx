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
        const { appState, changeSerieInfo, redirectTo, isLoading } = this.props;
        if(!isLoading){
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
    }

    componentWillReceiveProps(newProps){
        const { serieId } = newProps.match.params;
        const { changeSerieInfo, isLoading } = this.props;
        if(!isLoading){
            if(serieId !== undefined){
                changeSerieInfo(serieId);
            } else {
                changeSerieInfo("");
            }
        }
    }

    onSearchClick = () => {
        const { redirectTo } = this.props;
        redirectTo("/searchpage/");
    }

    render(){
        
        return(
            <div>
                <NavBar>{screenNames.HOME_PAGE_NAME}</NavBar>
                <div className="homepage-body">
                    <button className="homepage-search-button" onClick={this.onSearchClick}> Search &#8594;</button>
                </div>
                <MyList />
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        appState: state,
        isLoading: selectors.getIsLoading(state),
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
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

import NavBar from '../../components/NavBar';
import SearchForm from '../../components/SearchForm';
import SearchList from '../../components/SearchList';

import * as actions from '../../actions';
import * as selectors from '../../reducers';
import './searchpage.css';

class searchPage extends React.Component {

    componentDidMount(){
        const { searchName } = this.props.match.params;
        const { searchInDatabase } = this.props;
        if(searchName !== undefined){
            searchInDatabase(searchName);
        } else {
            searchInDatabase("");
        }
    }

    componentWillReceiveProps(newProps){
        const { searchName } = newProps.match.params;
        const { searchInDatabase } = this.props;
        if(this.props.match.params.searchName !== searchName){
            if(searchName !== undefined){
                searchInDatabase(searchName);
            } else {
                searchInDatabase("");
            }
        }
    }

    onReturnClick = () => {
        const { redirectTo } = this.props;
        redirectTo("/homepage/");
    }

    render(){
        const { searchName } = this.props;

        return(
            <div>
                <NavBar> Search Page</NavBar>
                <div className="searchpage-body">
                    <button onClick={this.onReturnClick}> Return to homepage </button>
                    <SearchForm />
                    { searchName === "" ? <div></div> :<div> Search results for: {searchName}</div> }
                    { searchName === "" ? <div></div> :<SearchList/> }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        searchName: selectors.getSeriesSearchName(state),
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        redirectTo: (path) => {
            dispatch(actions.pathRedirecting(path));
        },

        searchInDatabase: (searchName) => {
            dispatch(actions.seriesSearching(searchName));
        }
    }
)

const SearchPage = connect(mapStateToProps, mapDispatchToProps)(searchPage);

export default SearchPage;
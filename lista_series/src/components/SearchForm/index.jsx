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
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';
import './search-form.css';

const renderInput = ({input, meta, ...props}) => (
    <div className="input-search-container">
        <input {...input} {...props} className="my-input-search title-input-search" />
    </div>
);

const SearchForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit} >
        <div className="search-form-container">
            <Field 
                type="text"
                name="search"
                placeholder="Search series here..."
                component={renderInput}
            />
            
            <div className="search-button-container">
                <button type="submit" className="input-button"> Search </button>
            </div>
        </div>
    </form>
);

export default reduxForm({
    form: 'serachForm',

    onSubmit(values, dispatch){
        const { search } = values;
        if(search !== undefined){
            dispatch(actions.pathRedirecting(`/searchpage/${search}`));
        } else {
            dispatch(actions.pathRedirecting("/searchpage/"));
        }
        
    },

})(SearchForm);
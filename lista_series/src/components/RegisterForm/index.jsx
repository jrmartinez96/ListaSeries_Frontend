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
import './register-form.css'

const renderInput = ({input, meta, ...props}) => (
    <div className="input-box">
        <div className="my-input-box">
            <input {...input} {...props} className="my-input title-input" />
        </div>

        {
            meta.error && meta.touched && (
            <div className="error">
                { meta.error }
            </div>
            )
        }
    </div>
);

const RegisterForm = ({ handleSubmit }) =>(
    <form onSubmit={handleSubmit} >
        <Field 
            type="text"
            name="name"
            placeholder="Name..."
            component={renderInput}
        />

        <Field 
            type="text"
            name="username"
            placeholder="Username..."
            component={renderInput}
        />

        <Field 
            type="text"
            name="email"
            placeholder="Email..."
            component={renderInput}
        />

        <Field 
            type="password"
            name="password"
            placeholder="Password..."
            component={renderInput}
        />

        <Field 
            type="password"
            name="repeatPassword"
            placeholder="Repeat password..."
            component={renderInput}
        />

        <div className="input-button-box">
            <button type="submit" className="input-button"> Register </button>
        </div>
    </form>
);

export default reduxForm({
    form: 'registerForm',

    onSubmit(values, dispatch){
        const { name, username, email, password } = values;
        dispatch(actions.userRegistering(name, username, email, password));
    },

    validate(values){
        const errors = {};

        if(!values.name){
            errors.name = "Es obligatorio este campo";
        }

        if(!values.username){
            errors.username = "Es obligatorio este campo";
        }
        
        if(!values.email){
            errors.email = "Es obligatorio este campo";
        }

        if(!values.password){
            errors.password = "Es obligatorio este campo";
        }

        if(!values.repeatPassword){
            errors.repeatPassword = "Es obligatorio este campo";
        }

        return errors;
    }
})(RegisterForm);
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

import './login-form.css'

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

const LoginForm = ({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <Field 
            type="text"
            name="username"
            placeholder="Username..."
            component={renderInput}
        />

        <Field 
            type="password"
            name="password"
            placeholder="Password..."
            component={renderInput}
        />

        <div className="input-button-box">
            <button type="submit" className="input-button"> Login </button>
        </div>
    </form>
)

export default reduxForm({
    form: 'loginForm',

    onSubmit(values, dispatch){
        console.log(values);
    },

    validate(values){
        const errors = {};

        if(!values.username){
            errors.username = "Es obligatorio este campo";
        }

        if(!values.password){
            errors.password = "Es obligatorio este campo";
        }

        return errors;
    }
})(LoginForm);
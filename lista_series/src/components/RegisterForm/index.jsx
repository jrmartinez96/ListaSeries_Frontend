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
        const {username, email, password } = values;
        dispatch(actions.userRegistering(username, email, password));
    },

    validate(values){
        const errors = {};

        if(!values.username){
            errors.username = "This field is required";
        }
        
        if(!values.email){
            errors.email = "This field is required";
        }

        if(!values.password){
            errors.password = "This field is required";
        }

        if(!values.repeatPassword){
            errors.repeatPassword = "This field is required";
        }

        if(values.password && values.repeatPassword){
            if(values.password !== values.repeatPassword){
                errors.repeatPassword = "Passwords don't match"
            } else {
                if(values.password.length < 8){
                    errors.password = "Must be at least of 8 characters"
                }
            }
        }

        if(values.email){
            const isEmail = values.email.indexOf("@");

            if(isEmail === -1){
                errors.email = "Email is required"
            }
        }

        return errors;
    }
})(RegisterForm);
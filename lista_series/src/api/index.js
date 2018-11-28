/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez       Jose Rodolfo Perez
    15163               16056

    Proyecto - Lista Series
==========================================
*/

import axios from 'axios';

// LOGIN
export const loginUserApi = (username, password) =>(
    axios.post(
        'http://localhost:8000/api-token-auth/',
        {
            username,
            password
        }
    ).catch(error => {
        if(error.response) {
            console.log("Error reponse\n\t status: ", error.response.status, "\n\t data:", error.response.data)
        } else if (error.request){
            console.log(error.request)
        } else {
            console.log(error.config)
        }

        return error;
    })
)

// REGISTER
export const registerUserApi = (username, email, password) =>(
    axios.post(
        'http://localhost:8000/api/users/',
        {
            username,
            password,
            email
        }
    ).catch(error => {
        console.log(error);
        return error;
    })
)

// SEARCH SERIES
export const searchSeriesApi = (name, token) =>(
    axios.get(
        `http://localhost:8000/api/series/${name}/`,
        {
            headers:{
                'Authorization': `JWT ${token}`
            },
        }
    ).catch(error => {
        console.log(error);
        return error;
    })
)

// GET MY LIST FROM USER ID
export const getMyListFromUserId = (userId, token) =>(
    axios.get(
        `http://localhost:8000/api/assignment/${userId}/`,
        {
            headers:{
                'Authorization': `JWT ${token}`
            },
        }
    ).catch(error => {
        return error;
    })
)

// GET SERIE BY ID
export const getSerieByIdApi = (serieId, token) =>(
    axios.get(
        `http://localhost:8000/api/serie/byid/${serieId}/`,
        {
            headers:{
                'Authorization': `JWT ${token}`
            },
        }
    ).catch(error => {
        return error;
    })
)

// ASSIGN SERIES
export const assignSeriesApi = (userId, serieId, token) =>(
    axios.post(
        'http://localhost:8000/api/assignment/',
        {
            user_id: userId,
            serie_id: serieId,
            status: true,
            current_episode: 1
            
        },
        {
            headers:{
                'Authorization': `JWT ${token}`
            }
        }
    ).catch(error => {
        return error;
    })
)

// DELETE ASSIGNMENT
export const deleteAssignmentApi = (userId, serieId, token) => (
    axios.get(
        `http://localhost:8000/api/deletion/${serieId}/${userId}/`,
        {
            headers:{
                'Authorization': `JWT ${token}`
            }
        }
    ).catch(error => {
        return error;
    })
)
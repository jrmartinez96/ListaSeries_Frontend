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
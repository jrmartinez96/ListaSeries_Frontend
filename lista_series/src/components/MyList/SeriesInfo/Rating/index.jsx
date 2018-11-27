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
import './rating.css';

class Rating extends React.Component {

    render(){
        const { ratingNumber } = this.props;

        let starsRating = [0,0,0,0,0];

        for (let i = 0; i < starsRating.length; i++) {
            const dif = ratingNumber - i;

            if(dif > 0){
                if( dif < 1){
                    if(dif < 0.5){
                        starsRating[i] = 0;
                    } else {
                        starsRating[i] = 1;
                    }
                } else {
                    starsRating[i] = 2;
                }
            } 
            
        }

        return(
            <div className="rating-container">
                {starsRating.map((starId, index) => {
                    if(starId === 2){
                        return <img key={index} alt="star" src={require('../../../../assets/icons/full-star/2x/full-star.png')} />
                    } else if(starId === 1){
                        return <img key={index} alt="star" src={require('../../../../assets/icons/half-star/2x/half-star.png')} />
                    } else {
                        return <img key={index} alt="star" src={require('../../../../assets/icons/blank-star/2x/blank-star.png')} />
                    }
                })}
            </div>
        )
    }
}

export default Rating;
import React from 'react';
import"./Carousel.scss"
import { Link } from 'react-router-dom';
import { shortenText } from '../../utils';
const CarouselItem = ({url}) =>{
    return(
        <div className="carouselItem">
          
                <img className="product--image" src={url} alt ="product" />
                
          
            

        </div>
    );
};
export default CarouselItem;

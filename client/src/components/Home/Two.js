import React from 'react'
import PictureOne from './pic11.jpg';
import PictureTwo from './pic12.jpg';
import PictureThree from './pic13.jpg';
import Carousel from 'react-bootstrap/Carousel';

const Two = () => {
    return (
        <div style={{display:"flex", paddingTop:"100px"}}>
            <div style={{alignSelf:'center'}}>
                <h1 style={{color:"#0082cb"}}>UN OBJECTIF A ATTEINDRE ?</h1>
                <p>Quel que soit votre parcours, votre objectif d’entraînement ou votre niveau de pratique, vous trouverez des activités qui vous aideront à atteindre votre but.</p>
            </div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PictureOne}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PictureTwo}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={PictureThree}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Two

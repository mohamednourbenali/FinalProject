import React from 'react'
import PicOne from "./pic1.jpg"
import PicTwo from "./pic2.jpg"
import PicThree from './pic3.jpg'
import Carousel from 'react-bootstrap/Carousel'
const One = () => {
    return (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",fontSize:"small"}}>
            <h1 style={{alignSelf:"center", color:"blue"}}>nos cours</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={PicOne}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h2>Bö-SPORT</h2>
                    <h4>FITNESS</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={PicTwo}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h2>BÖ-SPORT</h2>
                    <h4>BODY PUMP</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={PicThree}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h2>BÖ-SPORT</h2>
                    <h4>BODY ATTACK</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default One

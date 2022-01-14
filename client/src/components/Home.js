import React from 'react';
import One from './Home/One';
import Two from './Home/Two'
import Three from './Home/Three';
import Footer from './Home/Footer';

const Home = () => {
    return (
        < div style={{marginTop:"70px"}}>
            <One />
            <Two />
            <Three />
            <Footer/>
        </div>
    )
}

export default Home

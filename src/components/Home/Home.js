import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <>
            <Header></Header>
            <h2 className="my-5 py-5"> This is Home</h2>
            <Footer></Footer>
        </>
    )
}

export default Home;
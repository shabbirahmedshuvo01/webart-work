import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />

            <Banner />

            <Cards />

            <Footer />
        </div>
    );
};

export default Home;
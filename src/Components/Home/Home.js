import React from 'react';
import According from '../According/According';
import Banner from '../Banner/Banner.js';
import Memories from '../Memories/Memories';
import Plan from '../Plan/Plan';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Memories></Memories>
            <Plan></Plan>
            <According></According>
        </div>
    );
};

export default Home;
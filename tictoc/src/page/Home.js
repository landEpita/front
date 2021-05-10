import React from 'react';
import Grille from '../components/Grille';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div className="home">
            <Logo/>
            <Grille/>
        </div>
    );
};

export default Home;
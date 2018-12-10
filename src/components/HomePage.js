import React from 'react';
import News from './News'
import Scoreboard from './Scoreboard';
import fixed_bg from '../../public/images/stadium.png';

const bg = {
    backgroundImage: `url(${fixed_bg})`
};

const HomePage = () => (
    <div className='home-page' style={bg}>
        <News/>
        <Scoreboard/>
    </div>
);

export default HomePage;
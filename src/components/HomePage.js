import React from 'react';
import News from './News'
import Scoreboard from './Scoreboard';
import fixed_bg from '../../public/images/stadium.png';
import Tabs from './Tabs'
const bg = {
    backgroundImage: `url(${fixed_bg})`
};

const HomePage = () => (
    <div className='home-page' style={bg}>
        <News/>
        <Tabs className='score-board'>
            <div label="فوتبال"><Scoreboard type={'football'}/></div>
            <div label="بسکتبال"><Scoreboard type={'basketball'}/></div>
        </Tabs>

    </div>
);

export default HomePage;
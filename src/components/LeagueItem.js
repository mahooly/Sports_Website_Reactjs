import React from 'react';
import {Link} from 'react-router-dom';

const LeagueItem = (props) => (
    <div className='league'>
        <img src={props.league.image}/><Link to={`/league/${props.league.name}`}>{props.league.name} ({props.league.startDate})</Link>
    </div>
);


export default LeagueItem;

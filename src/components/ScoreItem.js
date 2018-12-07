import React from 'react';
import { Link } from 'react-router-dom';

const ScoreItem = ({ id, teamOne, teamTwo, scoreOne, scoreTwo }) => (
    <div>
        <Link to={`/team/${teamOne}`}>
            <h3>{teamOne}</h3>
        </Link>
        <p> {scoreOne}</p>
        <Link to={`/team/${teamTwo}`}>
            <h3>{teamTwo}</h3>
        </Link>
        <p> {scoreTwo}</p>
        <Link to={`/match/${id}`}>
            <p>More</p>
        </Link>
    </div>
);

export default ScoreItem;
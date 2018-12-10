import React from 'react';
import {connect} from 'react-redux';
import matchSelector from '../selectors/matches';
import Scoreboard from './Scoreboard';

const LeaguePage = (props) => (
    <div>
        <h2>{props.league.name}</h2>
        <Scoreboard matches={props.matches}/>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        league: state.leagues.find((league) => league.name === props.match.params.name),
        matches: matchSelector(state.matches, state.filters).filter((match) => match.league === props.match.params.name)
    };
};

export default connect(mapStateToProps)(LeaguePage);
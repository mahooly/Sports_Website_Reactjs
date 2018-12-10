import React from 'react';
import {connect} from 'react-redux';
import LeagueItem from './LeagueItem';

const Leagues = (props) => (
    <div>
        <p>صفحه لیگ ها</p>
        {props.leagues.map((league) => <LeagueItem key={league.name} {...league}/>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        leagues: state.leagues.find((league) => league.isOngoing),
        oldLeagues: state.leagues.find((league) => !league.isOngoing)
    };
};

export default connect(mapStateToProps)(Leagues);
import React from 'react';
import {connect} from 'react-redux';
import LeagueItem from './LeagueItem';
import leagueSelector from '../selectors/leagues';
import LeagueFilter from './LeagueFilter';

const Leagues = (props) => (
    <div>
        <p>صفحه لیگ ها</p>
        <LeagueFilter/>
        {props.leagues.map((league) => {
            return <LeagueItem key={league.name} league={league}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        leagues: leagueSelector(state.leagues, state.filters)
    };
};

export default connect(mapStateToProps)(Leagues);
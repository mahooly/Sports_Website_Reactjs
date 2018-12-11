import React from 'react';
import {connect} from 'react-redux';
import LeagueItem from './LeagueItem';
import leagueSelector from '../selectors/leagues';
import LeagueFilter from './LeagueFilter';

const Leagues = (props) => {
    const oldLeagues = props.leagues.filter((league) => !league.isOngoing).sort((a, b) => {
        return a.startDate > b.startDate ? -1 : 1
    });
    const newLeagues = props.leagues.filter((league) => league.isOngoing);
    return (
        <div>
            <p>صفحه لیگ ها</p>
            <LeagueFilter/>
            {newLeagues.map((league) => {
                return <LeagueItem key={league.name} league={league}/>
            })}
            {console.log(oldLeagues)}
            {oldLeagues.length && <p>لیگ های قدیمی</p>}

            {oldLeagues.map((league) => {
                return <LeagueItem key={league.name} league={league}/>
            })}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        leagues: leagueSelector(state.leagues, state.filters)
    };
};

export default connect(mapStateToProps)(Leagues);
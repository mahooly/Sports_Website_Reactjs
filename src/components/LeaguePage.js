import React from 'react';
import {connect} from 'react-redux';
import matchSelector from '../selectors/matches';
import Scoreboard from './Scoreboard';
import TeamFilter from './TeamFilter';
import teamSelector from '../selectors/teams';
import {Link} from 'react-router-dom';

const LeaguePage = (props) => (
    <div>
        <h2>{props.league.name}</h2>
        {console.log(props.matches)}
        <Scoreboard matches={props.matches} type={props.league.type}/>
        <TeamFilter/>
        <table>
            <thead>
            <th>تیم</th>
            <th>تعداد بازی ها</th>
            <th>امتیاز</th>
            </thead>
            <tbody>
            {props.league.teams.map((team) => {
                return (
                    <tr>
                        <th><Link to={`/team/${team.name}`}>{team.name}</Link></th>
                        <th>{team.matches}</th>
                        <th>{team.points}</th>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        league: state.leagues.find((league) => league.name === props.match.params.name),
        matches: matchSelector(state.matches, props.match.params.name, state.filters),
        teams: teamSelector((state.leagues.find((league) => league.name === props.match.params.name)).teams, state.filters)
    };
};

export default connect(mapStateToProps)(LeaguePage);
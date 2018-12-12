import React from 'react';
import {connect} from 'react-redux';
import matchSelector from '../selectors/matches';
import Scoreboard from './Scoreboard';
import TeamFilter from './TeamFilter';
import teamSelector from '../selectors/teams';
import {Link} from 'react-router-dom';

const bg = (props) => ({
    backgroundImage: `url(${props.league.bg_image})`
});

const LeaguePage = (props) => (
    <div className='league-page' style={bg(props)}>
        <h2>{props.league.logo && <img className='logo' src={props.league.logo}/>}{props.league.name}</h2>
        <div  className='home-page'>
            <TeamFilter/>
            <table className='table-format'>
                <thead>
                <th>تیم</th>
                <th>تعداد بازی ها</th>
                <th>امتیاز</th>
                </thead>
                <tbody>
                {props.league.teams.map((team) => {
                    return (
                        <tr>
                            <td><Link to={`/team/${team.name}`}>{team.name}</Link></td>
                            <td>{team.matches}</td>
                            <td>{team.points}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <Scoreboard matches={props.matches} type={props.league.type}/>
        </div>
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
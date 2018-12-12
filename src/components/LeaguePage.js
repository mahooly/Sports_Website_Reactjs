import React from 'react';
import {connect} from 'react-redux';
import matchSelector from '../selectors/matches';
import Scoreboard from './Scoreboard';
import TeamFilter from './TeamFilter';
import teamSelector from '../selectors/teams';
import leagueSelector from '../selectors/leagues';
import LeaguesFilter from './LeaguesFilter';
import {Link} from 'react-router-dom';


class LeaguePage extends React.Component {
    constructor(props) {
        super(props);
    }

    bg(props) {
        return ({
            backgroundImage: `url(${props.league.bg_image})`
        });
    }

    render() {
        return (
            <div className='league-page' style={this.bg(this.props)}>
                <LeaguesFilter leagues={this.props.leagues}/>
                {console.log(this.props.teams)}
                <h2>{this.props.league.logo &&
                <img className='logo' src={this.props.league.logo}/>}{this.props.league.name}</h2>
                <div className='home-page'>
                    <TeamFilter/>
                    <table className='table-format'>
                        <thead>
                        <th>تیم</th>
                        <th>تعداد بازی ها</th>
                        <th>امتیاز</th>
                        </thead>
                        <tbody>
                        {this.props.teams.map((team) => {
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
                    <Scoreboard matches={this.props.matches} type={this.props.league.type}/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        leagues: state.leagues.filter((league) => league.name === props.match.params.name).reverse(),
        matches: matchSelector(state.matches, props.match.params.name, state.filters),
        filters: state.filters,
        league: leagueSelector(state.leagues.filter((league) => league.name === props.match.params.name), state.filters)[0],
        teams: teamSelector((leagueSelector(state.leagues.filter((league) => league.name === props.match.params.name), state.filters)[0]).teams, state.filters),
    };
};

export default connect(mapStateToProps)(LeaguePage);
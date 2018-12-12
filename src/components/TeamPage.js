import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Tabs from './Tabs';
import News from './News';
import Scoreboard from './Scoreboard';
import MatchFilter from './MatchFilter';
import selectMatches from '../selectors/matches';
import PlayerFilter from './PlayerFilter';
import playerSelector from '../selectors/players';

class TeamPage extends React.Component {

    render() {
        return (
            <div className='team-page'>
                <div>
                    <h2>{this.props.team.logo &&
                    <img className='logo' src={this.props.team.logo}/>}{this.props.team.name}</h2>
                </div>
                <Tabs>
                    <div label="بازی ها">
                        <MatchFilter/>
                        <Scoreboard matches={this.props.matches} type={this.props.team.type} className='score-board'/>
                    </div>
                    <div label="اخبار">
                        <News news={this.props.news}/>
                    </div>
                    <div label="اعضای تیم">
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <PlayerFilter type={this.props.team.type}/>
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                {this.props.players.map((player) => {
                                    return (
                                        <div key={player.name} className='player'>
                                            <img className='player-image' src={player.image}/>
                                            <p>
                                                <Link to={`/player/${player.name}`}>
                                                    {player.name}
                                                </Link>
                                                <div style={{color: 'gray', float: 'left'}}> {player.position} </div>
                                            </p>
                                        </div>
                                    )
                                })}
                                {this.props.team.coachingStaff.map((staff) => {
                                    return (
                                        <div key={staff.name}>
                                            <p>
                                                {staff.name}
                                                {staff.position}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Tabs>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        team: state.teams.find((team) => team.name === props.match.params.name),
        matches: selectMatches(state.matches, props.match.params.name, state.filters),
        news: state.news.filter((article) => article.tags.includes(props.match.params.name)),
        players: playerSelector((state.teams.find((team) => team.name === props.match.params.name)).players, state.filters)
    };
};

export default connect(mapStateToProps)(TeamPage);
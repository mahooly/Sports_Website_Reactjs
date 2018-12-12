import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Tabs from './Tabs';
import News from './News';
import Scoreboard from './Scoreboard';
import MatchFilter from './MatchFilter';
import selectMatches from '../selectors/matches';

const TeamPage = (props) => (
    <div className='team-page'>
        <div>
            <h2>{props.team.logo && <img className='logo' src={props.team.logo}/>}{props.team.name}</h2>
        </div>
        <Tabs>
            <div label="بازی ها">
                <MatchFilter/>
                <Scoreboard matches={props.matches} type={props.team.type} className='score-board'/>
            </div>
            <div label="اخبار">
                <News news={props.news}/>
            </div>
            <div label="اعضای تیم">
                {props.team.players.map((player) => {
                    return (
                        <div key={player.name} className='player'>
                            <img src={player.image} />
                            <p>
                                <Link to={`/player/${player.name}`}>
                                    {player.name}
                                </Link> {player.position}
                            </p>
                        </div>
                    )
                })}
                {props.team.coachingStaff.map((staff) => {
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
        </Tabs>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        team: state.teams.find((team) => team.name === props.match.params.name),
        matches: selectMatches(state.matches, props.match.params.name, state.filters),
        news: state.news.filter((article) => article.tags.includes(props.match.params.name))
    };
};

export default connect(mapStateToProps)(TeamPage);
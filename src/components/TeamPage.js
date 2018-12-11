import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Tabs from './Tabs';
import News from './News';
import Scoreboard from './Scoreboard';
import MatchFilter from './MatchFilter';
import selectMatches from '../selectors/matches';

const TeamPage = (props) => (
    <div>
        <div>
            <p>{props.team.logo && <img src={props.team.logo}/>}{props.team.name}</p>
        </div>
        <Tabs>
            <div label="Matches">
                <MatchFilter/>
                <Scoreboard matches={props.matches}/>
            </div>
            <div label="News">
                <News news={props.news}/>
            </div>
            <div label="Players">
                {props.team.players.map((player) => {
                    return (
                        <div key={player.name}>
                            <p>
                                <Link to={`/player/${player.name}`}>
                                    {player.name}
                                </Link> {player.position}
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
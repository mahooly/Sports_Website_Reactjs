import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Tabs from './Tabs';
import News from './News';
import Scoreboard from './Scoreboard';

const TeamPage = (props) => (
    <div>
        <p>{props.team.name}</p>
        <Tabs>
            <div label="Matches">
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
        matches: state.matches.filter((match) => match.teamOne === props.match.params.name || match.teamTwo === props.match.params.name),
        news: state.news.filter((article) => article.tags.includes(props.match.params.name))
    };
};

export default connect(mapStateToProps)(TeamPage);
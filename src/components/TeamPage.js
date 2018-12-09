import React from 'react';
import {connect} from 'react-redux';

const TeamPage = (props) => (
    <div>
        <p>{props.team.name}</p>
        {props.team.players.map((player) => {
            return (
                <div key={player.name}>
                    <p>{player.name}</p>
                    <p>{player.position}</p>
                </div>
            )
        })}
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        team: state.teams.find((team) => team.name === props.match.params.name)
    };
};

export default connect(mapStateToProps)(TeamPage);
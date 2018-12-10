import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const PlayerPage = (props) => (
    <div>
        <p>{props.player.name}</p>
        <p>{props.player.height} m</p>
        <p>{props.player.weight} kg</p>
        <p>{props.player.nationality}</p>
        <p>Teams: {props.player.teams.map((team) => <Link key={team} to={`/team/${team}`}>{team}</Link>)}</p>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.name === props.match.params.name)
    };
};

export default connect(mapStateToProps)(PlayerPage);
import React from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs'

const MatchPage = (props) => {
    const teamOne = props.teams.find((team) => team.name === props.match.teamOne);
    const teamTwo = props.teams.find((team) => team.name === props.match.teamTwo);
    return (<div>
        <p>Match</p>
        <p>{teamOne.name} {props.match.scoreOne} - {props.match.scoreTwo} {teamTwo.name}</p>
        <Tabs>
            <div label="Timeline">
                <p>This is Timeline</p>
            </div>
            <div label="Stats">
                <p>This is stats</p>
            </div>
            <div label="News">
                <p>News section</p>
            </div>
        </Tabs>
    </div>);
};

const mapStateToProps = (state, props) => {
    return {
        match: state.matches.find((match) => match.id === props.match.params.id),
        teams: state.teams
    };
};

export default connect(mapStateToProps)(MatchPage);
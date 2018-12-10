import React from 'react';
import {connect} from "react-redux";

const LeagueItem = (props) => (
    <div>
        <p>{props.league.name}</p>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        ...props,
        matches: state.matches
    };
};

export default connect(mapStateToProps)(LeagueItem);
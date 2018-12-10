import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

const LeagueItem = (props) => (
    <div>
        <Link to={`/league/${props.league.name}`}>{props.league.name}</Link>
    </div>
);

const mapStateToProps = (state) => {
    return {
        matches: state.matches
    };
};

export default connect(mapStateToProps)(LeagueItem);

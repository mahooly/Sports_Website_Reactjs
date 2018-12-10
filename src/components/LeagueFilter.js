import React from 'react';
import {setTextFilter} from "../actions/filters";
import {connect} from 'react-redux';

const LeagueFilter = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(LeagueFilter);

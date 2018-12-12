import {setYearFilter, sortByName, sortByPoints} from "../actions/filters";
import React from "react";
import {connect} from "react-redux";

class LeaguesFilter extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(setYearFilter('2018'));
    };

    render() {
        return (
            <div>
                <select
                    value={this.props.filters.year}
                    onChange={(e) => {
                        this.props.dispatch(setYearFilter(e.target.value));
                    }}
                >
                    {this.props.leagues.map((league) => {
                        return <option key={league.id} value={league.startDate}>{league.startDate}</option>
                    })}
                </select>

            </div>)
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    };
};

export default connect(mapStateToProps)(LeaguesFilter);
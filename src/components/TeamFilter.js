import {sortByName, sortByPoints} from "../actions/filters";
import React from "react";
import {connect} from "react-redux";

class TeamFilter extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(sortByPoints('points'));
    };

    render() {
        return (
            <div>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'points') {
                            this.props.dispatch(sortByPoints(e.target.value));
                        } else if (e.target.value === 'name') {
                            this.props.dispatch(sortByName(e.target.value));
                        }
                    }}
                >
                    <option value="points">امتیاز</option>
                    <option value="name">نام</option>
                </select>

            </div>)
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(TeamFilter);
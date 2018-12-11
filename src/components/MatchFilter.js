import {sortByDate, sortByWin} from "../actions/filters";
import React from "react";
import {connect} from "react-redux";

class MatchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(sortByDate('date'));
    };

    render() {
        return (
            <div>
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate(e.target.value));
                        }
                        else if (e.target.value === 'win') {
                            this.props.dispatch(sortByWin(e.target.value));
                        }
                    }}
                >
                    <option value="date">تاریخ</option>
                    <option value="win">برد</option>
                </select>

            </div>)
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(MatchFilter);
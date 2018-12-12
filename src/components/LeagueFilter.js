import React from 'react';
import {setTextFilter, setYearFilter} from "../actions/filters";
import {connect} from 'react-redux';

class LeagueFilter extends React.Component {
    constructor (props) {
        super(props);
        props.dispatch(setTextFilter(''));
        props.dispatch(setYearFilter(''));
    }
    render() {
        return (
            <div className='form-submission'>
                <input
                    type="text"
                    placeholder='جستجو'
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(LeagueFilter);

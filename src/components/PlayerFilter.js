import {setTextFilter} from "../actions/filters";
import React from "react";
import {connect} from "react-redux";

class PlayerFilter extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(setTextFilter(''));
    };

    render() {
        return (
            <div>
                <p>نمایش بر اساس پست:
                    {this.props.type === 'football' && <select
                        value={this.props.filters.text}
                        onChange={(e) => {
                            if (e.target.value === 'مهاجم') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                            else if (e.target.value === 'هافبک') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                            else if (e.target.value === 'مدافع') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                            else if (e.target.value === 'دروازه بان') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                        }}
                    >
                        <option value="">---</option>
                        <option value="مهاجم">مهاجم</option>
                        <option value="هافبک">هافبک</option>
                        <option value="مدافع">مدافع</option>
                        <option value="دروازه بان">دروازه بان</option>
                    </select>}

                    {this.props.type === 'basketball' && <select
                        value={this.props.filters.text}
                        onChange={(e) => {
                            if (e.target.value === 'گارد') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                            else if (e.target.value === 'فوروارد') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                            else if (e.target.value === 'سنتر') {
                                this.props.dispatch(setTextFilter(e.target.value));
                            }
                        }}
                    >
                        <option value="">---</option>
                        <option value="گارد">گارد</option>
                        <option value="فوروارد">فوروارد</option>
                        <option value="سنتر">سنتر</option>
                    </select>}
                </p>
            </div>)
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(PlayerFilter);
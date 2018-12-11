import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import moment from 'moment';

export default class ScoreItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {redirect: false};
    };

    onClick = () => {
        this.setState({redirect: true})
    };

    render() {
        const {id, teamOne, teamTwo, scoreOne, scoreTwo, date} = this.props;
        const matchMoment = moment(date);
        console.log(matchMoment);
        if (this.state.redirect) {
            return <Redirect push to={`/match/${id}`}/>;
        }
        return (
            <div className='score-item' onClick={this.onClick}>
                <p>
                    <Link to={`/team/${teamOne}`}>{teamOne}</Link> {scoreOne} - {scoreTwo} <Link
                    to={`/team/${teamTwo}`}>{teamTwo}</Link>
                </p>
                {matchMoment.format("YY-MMM-DD HH:mm")}
            </div>
        );
    };
}

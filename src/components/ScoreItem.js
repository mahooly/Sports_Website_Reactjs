import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import moment from 'jalali-moment';

export default class ScoreItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {redirect: false};
    };

    onClick = () => {
        this.setState({redirect: true});
    };

    render() {
        const {id, teamOne, teamTwo, scoreOne, scoreTwo, date, logoOne, logoTwo} = this.props;
        const matchMoment = moment(date);
        matchMoment.locale('fa');
        if (this.state.redirect) {
            return <Redirect push to={`/match/${id}`}/>;
        }
        return (
            <div className='score-item' onClick={this.onClick}>
                <p>
                    <img className='logo' src={logoOne}/><Link to={`/team/${teamOne}`}>{teamOne}</Link> {scoreOne} - {scoreTwo} <Link to={`/team/${teamTwo}`}>{teamTwo}</Link><img className='logo' src={logoTwo}/>
                </p>
                {matchMoment.format("DD MMM - HH:mm ")}
            </div>
        );
    };
}

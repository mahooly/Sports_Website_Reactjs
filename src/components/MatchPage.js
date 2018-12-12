import React from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs';
import moment from 'moment';
import News from './News';
import {Link} from 'react-router-dom';

const MatchPage = (props) => {
    const teamOne = props.teams.find((team) => team.name === props.match.teamOne);
    const teamTwo = props.teams.find((team) => team.name === props.match.teamTwo);
    const begin = moment(props.match.date).subtract(1, 'days').startOf('day');
    const end = moment(props.match.date).add(1, 'days').endOf('day');
    const news = props.news.filter((article) => article.tags.includes(teamOne.name) && article.tags.includes(teamTwo.name) && moment(article.date).isAfter(begin) && moment(article.date).isBefore(end));
    const timeline = props.match.events.sort((a,b) => {return a.time > b.time ? -1 : 1});

    return (<div className='team-page'>
        <h2><Link to={`/team/${teamOne.name}`}><img src={teamOne.logo}/>{teamOne.name}</Link> {props.match.scoreOne} - {props.match.scoreTwo} <Link
            to={`/team/${teamTwo.name}`}><img src={teamTwo.logo}/>{teamTwo.name}</Link></h2>
        <Tabs>
            <div label="تایم لاین" className='tab-content'>
                <table className='table-format'>
                    {timeline.length === 0 ? <p>بازی هنوز شروع نشده است.</p>: timeline.map((event) => {return (
                        <tr>
                            <td>{event.first}</td>
                            <td>{event.time}</td>
                            <td>{event.second}</td>
                        </tr>
                    )})}
                </table>
            </div>
            <div label="آمار" className='tab-content'>
                {timeline.length === 0 ? <p>بازی هنوز شروع نشده است.</p>: <table className='table-format'>
                    <thead>
                    <th><img className='logo' src={teamOne.logo}/></th>
                    <th>آمار بازی</th>
                    <th><img className='logo' src={teamOne.logo}/></th>
                    </thead>
                    {props.match.stats.map((stat) => {
                        return (
                            <tr>
                                <td>{stat.first}</td>
                                <td>{stat.name}</td>
                                <td>{stat.second}</td>
                            </tr>
                        )
                    })}
                </table>}
            </div>
            <div label="بازیکنان"  className='tab-content'>
                <img className='logo' src={teamOne.logo}/>
                <table className='table-format'>
                    {props.match.playersOne.map((player) => {
                        return (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.position} {player.change}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <th colSpan={2}>بازیکنان ذخیره</th>
                    </tr>
                    {props.match.subOne.map((player) => {
                        return (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                {player.change && <td>{player.change}</td>}
                            </tr>
                        );
                    })}
                </table>
                <img className='logo' src={teamTwo.logo}/>
                <table className='table-format'>
                    {props.match.playersTwo.map((player) => {
                        return (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                {player.change && <td>{player.change}</td>}
                            </tr>
                        );
                    })}
                    <tr>
                        <th colSpan={2}>بازیکنان ذخیره</th>
                    </tr>
                    {props.match.subTwo.map((player) => {
                        return (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                {player.change && <td>{player.change}</td>}
                            </tr>
                        );
                    })}
                </table>

            </div>

            <div label="اخبار">
                {console.log(news)}
                <News news={news}/>
            </div>

        </Tabs>
    </div>);
};

const mapStateToProps = (state, props) => {
    return {
        match: state.matches.find((match) => match.id === props.match.params.id),
        teams: state.teams,
        news: state.news
    };
};

export default connect(mapStateToProps)(MatchPage);
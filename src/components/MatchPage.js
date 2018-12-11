import React from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs';
import moment from 'moment';
import News from './News';

const MatchPage = (props) => {
    const teamOne = props.teams.find((team) => team.name === props.match.teamOne);
    const teamTwo = props.teams.find((team) => team.name === props.match.teamTwo);
    const begin = moment(props.match.date).subtract(1, 'days').startOf('day');
    const end = moment(props.match.date).add(1, 'days').endOf('day');
    const news = props.news.filter((article) => article.tags.includes(teamOne.name) && article.tags.includes(teamTwo.name) && moment(article.date).isAfter(begin) && moment(article.date).isBefore(end));
    const timeline = props.match.events.sort((a,b) => {return a.time > b.time ? -1 : 1});

    return (<div>
        <p>{teamOne.name} {props.match.scoreOne} - {props.match.scoreTwo} {teamTwo.name}</p>
        <Tabs>
            <div label="تایم لاین">
                {timeline && timeline.map((event) => <div>{event.time}<p>{event.text}</p></div>)}
            </div>
            <div label="آمار">
                <table>
                    <thead>
                    <th><img src={teamOne.logo}/></th>
                    <th>آمار بازی</th>
                    <th><img src={teamOne.logo}/></th>
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
                </table>
            </div>
            <div label="بازیکنان">
                <img src={teamOne.logo}/>
                <table>
                    {props.match.playersOne.map((player) => {
                        return (
                            <tr>
                                <td>{player.name}</td>
                                <td>{player.position}</td>
                                {player.change && <td>{player.change}</td>}
                            </tr>
                        );
                    })}
                    <tr>
                        <td>  </td>
                        <td>بازیکنان ذخیره</td>
                        <td></td>
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
                <img src={teamTwo.logo}/>
                <table>
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
                        <td>  </td>
                        <td>بازیکنان ذخیره</td>
                        <td></td>
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
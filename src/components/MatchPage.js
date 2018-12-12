import React from 'react';
import {connect} from 'react-redux';
import Tabs from './Tabs';
import moment from 'moment';
import News from './News';
import {Link} from 'react-router-dom';
import fixed_bg from '../../public/images/stadium.png';

const bg = {
    backgroundImage: `url(${fixed_bg})`
};


const MatchPage = (props) => {
    const teamOne = props.teams.find((team) => team.name === props.match.teamOne);
    const teamTwo = props.teams.find((team) => team.name === props.match.teamTwo);
    const begin = moment(props.match.date).subtract(1, 'days').startOf('day');
    const end = moment(props.match.date).add(1, 'days').endOf('day');
    const news = props.news.filter((article) => article.tags.includes(teamOne.name) && article.tags.includes(teamTwo.name) && moment(article.date).isAfter(begin) && moment(article.date).isBefore(end));
    const timeline = props.match.events.sort((a, b) => {
        return a.time > b.time ? -1 : 1
    });

    return (<div className='team-page' style={bg}>
        <h2><img className='logo' src={teamOne.logo}/><Link
            to={`/team/${teamOne.name}`}>{teamOne.name}</Link> {props.match.scoreOne} - {props.match.scoreTwo} <Link
            to={`/team/${teamTwo.name}`}>{teamTwo.name}</Link><img className='logo' src={teamTwo.logo}/></h2>
        <Tabs>
            <div label="تایم لاین" className='tab-content'>
                {timeline.length === 0 ? <p>بازی هنوز شروع نشده است.</p> : <table className='table-format'>
                    <thead>
                    <th><img className='logo' src={teamOne.logo}/></th>
                    <th>زمان (دقیقه)</th>
                    <th><img className='logo' src={teamTwo.logo}/></th>
                    </thead>
                    {timeline.map((event) => {
                        return (
                            <tr>
                                <td>{event.first}</td>
                                <td>{event.time}</td>
                                <td>{event.second}</td>
                            </tr>
                        )
                    })}
                </table>}
            </div>
            <div label="آمار" className='tab-content'>
                {timeline.length === 0 ? <p>بازی هنوز شروع نشده است.</p> : <table className='table-format'>
                    <thead>
                    <th><img className='logo' src={teamOne.logo}/></th>
                    <th>آمار بازی</th>
                    <th><img className='logo' src={teamTwo.logo}/></th>
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
            <div label="بازیکنان" className='tab-content'>
                {props.match.playersTwo.length === 0 ? <p>لیست بازیکنان هنوز اعلام نشده است.</p> :
                    <div><img className='logo' src={teamOne.logo}/>
                        <table className='table-format'>
                            <thead>
                            <th>نام بازیکن</th>
                            <th>نقش</th>
                            </thead>
                            {props.match.playersOne.map((player) => {
                                return (
                                    <tr>
                                        <td>{player.name}</td>
                                        <td>{player.position} {player.change}</td>
                                    </tr>
                                );
                            })}
                            <tr>
                                {props.match.type === 'football' && <th colSpan={2}>بازیکنان ذخیره</th>}
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
                            <thead>
                            <th>نام بازیکن</th>
                            <th>نقش</th>
                            </thead>
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
                                {props.match.type === 'football' && <th colSpan={2}>بازیکنان ذخیره</th>}
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
                    </div>}
            </div>

            <div label="اخبار">
                <News news={news}/>
            </div>

            <div label="گزارش زنده">
                {props.match.hasCommentary ? <p>گزارش زنده</p> : <p>گزارش زنده برای این بازی فعال نیست</p>}
            </div>

            <div label="عکس ها">
                {props.match.photos.map((photo) => {
                    return <img scr={photo}/>
                })}
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
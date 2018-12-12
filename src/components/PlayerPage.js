import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import News from './News';


const PlayerPage = (props) => (
    <div className='news-page'>
        <div className='player'>
            <div>
                <img src={props.player.image}/>
                <p>نام: {props.player.name}</p>
                <p>قد: {props.player.height} متر</p>
                <p>وزن: {props.player.weight} کیلوگرم</p>
                <p>ملیت: {props.player.nationality}</p>
                <p>تیم ها: {props.player.teams.map((team) => (
                    <div><Link key={team} to={`/team/${team}`}>{team.name}</Link> (شماره‌ی{team.number}، {team.position})
                    </div>))}</p>
            </div>

            <div>
                <p>آمار</p>
                {props.player.stats.map((season) => {
                    return (
                        <div>
                            <h5>{season.name}</h5>
                            <table>
                                {season.stats.map((stat) => {
                                    return (
                                        <tr>
                                            <td>{stat.name}</td>
                                            <td>{stat.value}</td>
                                        </tr>
                                    )
                                })}
                            </table>
                        </div>
                    )
                })}
            </div>
            <News news={props.news}/>
        </div>
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.name === props.match.params.name),
        news: state.news.filter((article) => article.tags.includes(props.match.params.name))
    };
};

export default connect(mapStateToProps)(PlayerPage);
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import News from './News';

const PlayerPage = (props) => (
    <div className='player-page'>
        <div className='player-info'>
            <div className='player-profile-info'>
                <h2>{props.player.name}</h2>
                <p>قد:  {props.player.height} متر</p>
                <p>وزن: {props.player.weight} کیلوگرم</p>
                <p>ملیت:    {props.player.nationality}</p>
                <p>تیم ها: {props.player.teams.map((team) => (
                    <div><Link key={team} to={`/team/${team}`}>{team.name}</Link> ({team.number}# {team.position})
                    </div>))}</p>
            </div>
            <img className='player-profile-image' src={props.player.image}/>
        </div>

        <div className='player-stats'>
            <p>آمار</p>
            {props.player.stats.map((season) => {
                return (
                    <div>
                        <table className='table-format'>
                            <thead>
                                <th>فصل</th>
                                <th>{season.name}</th>
                            </thead>
                            {season.stats.map((stat) => {
                                return (
                                    <tr>
                                        <th>{stat.name}</th>
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
);

const mapStateToProps = (state, props) => {
    return {
        player: state.players.find((player) => player.name === props.match.params.name),
        news: state.news.filter((article) => article.tags.includes(props.match.params.name))
    };
};

export default connect(mapStateToProps)(PlayerPage);
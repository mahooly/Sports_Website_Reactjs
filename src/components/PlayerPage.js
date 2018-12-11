import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import News from './News';

const PlayerPage = (props) => (
    <div className='news-page'>
        <div className='news-item'>
            <p>{props.player.name}</p>
            <p>{props.player.height} m</p>
            <p>{props.player.weight} kg</p>
            <p>{props.player.nationality}</p>
            <p>Teams: {props.player.teams.map((team) => <Link key={team} to={`/team/${team}`}>{team}</Link>)}</p>
            <p>آمار</p>
            {props.player.stats.map((stat) => {
                return (
                    <tr>
                        <td>{stat.name}</td>
                        <td>{stat.value}</td>
                    </tr>
                )
            })}
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
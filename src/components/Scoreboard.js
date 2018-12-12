import React from 'react'
import ScoreItem from './ScoreItem'
import {connect} from "react-redux";
import moment from 'moment';

const Scoreboard = (props) => (
  <div className='score-board'>
      {console.log(props)}
      <h2 className='score-item'>بازی ها</h2>
      {props.matches.map((match) => {
          return <ScoreItem key={match.id} {...match}/>
      })}
  </div>
);

const mapStateToProps = (state, props) => {
    return {
        matches: (props.matches ? props.matches : state.matches.filter((match) => moment(match.date).isBefore(moment().endOf('day')) && moment(match.date).isAfter(moment().startOf('day')))).filter((match) => match.type === props.type)
    };
};

export default connect(mapStateToProps)(Scoreboard);
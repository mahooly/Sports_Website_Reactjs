import React from 'react'
import ScoreItem from './ScoreItem'
import {connect} from "react-redux";
import Tabs from './Tabs';

const Scoreboard = (props) => (
  <div className='score-board'>
      <h2>بازی ها</h2>
      {props.matches.map((match) => {
          return <ScoreItem key={match.id} {...match}/>
      })}
  </div>
);

const mapStateToProps = (state, props) => {
    return {
        matches: props.matches ? props.matches : state.matches
    };
};

export default connect(mapStateToProps)(Scoreboard);
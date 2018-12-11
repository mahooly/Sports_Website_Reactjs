import React from 'react'
import ScoreItem from './ScoreItem'
import {connect} from "react-redux";

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
        matches: (props.matches ? props.matches : state.matches).filter((match) => match.type === props.type)
    };
};

export default connect(mapStateToProps)(Scoreboard);
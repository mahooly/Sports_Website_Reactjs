import React from 'react'
import ScoreItem from './ScoreItem'
const Scoreboard = (props) => (
  <div>
      <h2>بازی ها</h2>
      {props.news.map((match) => {
          return <ScoreItem key={match.id} {...match}/>
      })}
  </div>
);
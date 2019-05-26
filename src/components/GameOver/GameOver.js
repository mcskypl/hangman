/* eslint-disable react/button-has-type */
import React from 'react';
import style from './GameOver.module.scss';

const GameOver = props => {
  let content = '';

  if (props.over) {
    content = (
      <div className={style.wrapper}>
        <h1>GAME OVER</h1>
        <button onClick={props.newGame}>NEW WORD</button>
      </div>
    );
  } else if (props.win) {
    content = (
      <div className={style.wrapper}>
        <h1>Hurrra! You win</h1>
        <button onClick={props.newGame}>NEW WORD</button>
      </div>
    );
  }

  return <>{content}</>;
};

export default GameOver;

import React from 'react';
import style from './Missed.module.scss';

const Missed = props => {
  return (
    <div className={style.wrapper}>
      <h3>YOU MISSED:</h3>
      <h1>{props.missed}</h1>
    </div>
  );
};

export default Missed;

import React from 'react';
import style from './Missed.module.scss';

const Missed = ({ missed }) => {
  return (
    <div className={style.wrapper}>
      <h3>YOU MISSED:</h3>
      <h1>{missed}</h1>
    </div>
  );
};

export default Missed;

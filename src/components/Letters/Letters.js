import React from 'react';
import style from './Letters.module.scss';

const Letters = ({ letters, token }) => {
  let content = '';
  for (let i = 0; i < letters; i += 1) {
    content = `${content} _`;
  }

  return (
    <div className={style.wrapper}>
      <p>YOU MISSED:</p>
      <h1>{letters}</h1>
      {content}
      <h6>{token}</h6>
    </div>
  );
};

export default Letters;

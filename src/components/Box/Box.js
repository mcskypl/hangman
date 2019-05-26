import React from 'react';
import style from './Box.module.scss';
// import Frames from './Frames/Frames';

const Box = props => {
  let content = '';
  const list = props.state.blankSolutionTab;

  if (list.length > 0) {
    content = list.map(item => <li>{item}</li>);
  }

  return (
    <div className={style.wrapper}>
      <ul>{content}</ul>
    </div>
  );
};

export default Box;

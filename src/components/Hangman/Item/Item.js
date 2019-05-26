import React from 'react';

import './Item.css';

const Item = props => {
  return (
    <div className="wrapperItem">
      <img src={props.partName} alt={props.partClass} className={props.partClass} />
    </div>
  );
};

export default Item;

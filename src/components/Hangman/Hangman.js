import React from 'react';
import Item from './Item/Item';
import style from './Hangman.module.scss';

import Head from '../png/head.png';
import Neck from '../png/neck.png';
import Corpus from '../png/corpus.png';
import RightArm from '../png/right-arm.png';
import LeftArm from '../png/left-arm.png';
import RightHand from '../png/right-hand.png';
import LeftHand from '../png/left-hand.png';
import RightLeg from '../png/right-leg.png';
import LeftLeg from '../png/left-leg.png';
import RightFoot from '../png/right-foot.png';
import LeftFoot from '../png/left-food.png';

const Hangman = props => {
  const imagesN = [
    {
      hItem: Head,
      hClass: 'head',
    },
    {
      hItem: Neck,
      hClass: 'neck',
    },
    {
      hItem: Corpus,
      hClass: 'corpus',
    },
    {
      hItem: RightArm,
      hClass: 'rightarm',
    },
    {
      hItem: LeftArm,
      hClass: 'leftarm',
    },
    {
      hItem: RightHand,
      hClass: 'righthand',
    },
    {
      hItem: LeftHand,
      hClass: 'lefthand',
    },
    {
      hItem: RightLeg,
      hClass: 'rightleg',
    },
    {
      hItem: LeftLeg,
      hClass: 'leftleg',
    },
    {
      hItem: RightFoot,
      hClass: 'rightfoot',
    },
    {
      hItem: LeftFoot,
      hClass: 'leftfoot',
    },
  ];

  let { steps } = props;

  if (steps > imagesN.length) {
    steps = imagesN.length;
  }

  const images = [];

  for (let i = 0; i < steps; i += 1) {
    images[i] = imagesN[i];
  }

  return (
    <div className={style.wrapper}>
      <div className={style.branch} />
      <div className={style.branchTop} />
      {images.map(item => (
        <Item key={item.hClass} partName={item.hItem} partClass={item.hClass} />
      ))}
    </div>
  );
};

export default Hangman;

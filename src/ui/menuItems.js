import React from 'react';
import {
  GiBallerinaShoes,
  GiBrain,
  GiComputing,
  GiMarsPathfinder,
  GiNothingToSay,
  GiCandles,
} from 'react-icons/gi';
export const menuItems = [
  {
    name: 'languages',
    Icon: <GiComputing />,
    id: 'one',
    description: 'JS, CSS, HTML',
  },
  {
    name: 'sayings',
    Icon: <GiNothingToSay />,
    id: 'four',
    description: 'Alls well that ends well.',
  },
  {
    name: 'tech',
    Icon: <GiMarsPathfinder />,
    id: 'five',
    description: 'React',
  },
  {
    name: 'wishes',
    Icon: <GiCandles />,
    id: 'six',
    description: 'I wish everyone would be nice to each other.',
  },
  {
    name: 'hobbies',
    Icon: <GiBallerinaShoes />,
    id: 'two',
    description: 'Drawing, Painting, Coding, Yoga',
  },
  {
    name: 'traits',
    Icon: <GiBrain />,
    id: 'three',
    description: 'Persistant, Intelligent',
  },
];

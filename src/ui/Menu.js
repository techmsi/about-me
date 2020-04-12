import React, { useState } from 'react';
import { Link } from '@reach/router';
const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          backgroundImage: isCurrent ? `radial-gradient(yellow, #f06d06)` : '',
          ...props.styles,
        },
      };
    }}
  />
);
export const MenuItem = ({ name, id, Icon = null }, itemId) => {
  const BASE_DEG = 60;
  const inlineStyleOn = {
    transform: `rotate(${BASE_DEG * ++itemId}deg)`,
  };
  const inlineStyle = inlineStyleOn;
  const toggleClassname = `sectors ${id}`;
  return (
    <NavLink
      to={`sector/${name}`}
      styles={inlineStyle}
      key={`menu-item-${name}`}
      className={toggleClassname}
    >
      <span className="icon">{name}</span>
      <span className="icon">{Icon}</span>
    </NavLink>
  );
};
export const Menu = ({ items, open }) =>
  items ? (
    <nav className={`menu ${open ? 'open' : ''}`}>{items.map(MenuItem)}</nav>
  ) : (
    <p>No items.</p>
  );

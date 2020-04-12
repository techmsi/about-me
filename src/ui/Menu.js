import React, { useState } from 'react';
export const MenuItem = ({ name, id, Icon = null }, itemId) => {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  };
  const BASE_DEG = 60;
  const inlineStyleOn = {
    transform: `rotate(${BASE_DEG * ++itemId}deg)`,
  };
  const inlineStyleOff = {
    transform: `rotate(0)`,
  };
  const inlineStyle = inlineStyleOn;
  const toggleClassname = selected
    ? `sectors selected ${id}`
    : `sectors ${id} `;
  return (
    <div
      onClick={toggleSelected}
      style={inlineStyle}
      key={`menu-item-${name}`}
      className={toggleClassname}
    >
      <span className="icon">{name}</span>
      <span className="icon">{Icon}</span>
    </div>
  );
};
export const Menu = ({ items, open }) =>
  items ? (
    <nav className={`menu ${open ? 'open' : ''}`}>{items.map(MenuItem)}</nav>
  ) : (
    <p>No items.</p>
  );

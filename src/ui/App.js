import React, { useState } from 'react';
import { Sector } from '/ui/Sector';
import { menuItems } from '/ui/menuItems';
import { Menu } from '/ui/Menu';

export const App = () => {
  const [open, setOpen] = useState(true);
  const toggleClassname = open ? 'btn-menu open' : 'btn-menu';
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <section className="app">
      <h1>~ About Me ~</h1>
      <div className="center">
        <Menu items={menuItems} open={open} />

        <button
          tabIndex={0}
          onClick={toggleOpen}
          className={toggleClassname}
          aria-label="toggle menu"
        >
          +
        </button>
      </div>

      <Sector />
    </section>
  );
};

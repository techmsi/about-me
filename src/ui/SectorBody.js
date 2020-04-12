import React from 'react';
import { menuItems } from '/ui/menuItems';

export const getId = (menuItems, sectorId) =>
  menuItems.filter(({ name }) => name === sectorId)[0].description;

export const SectorBody = ({ sectorId }) => (
  <section className="sector-body">
    <h2>{sectorId}</h2>
    <p>{getId(menuItems, sectorId)}</p>
  </section>
);

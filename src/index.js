import React from 'react';
import { render } from 'react-dom';
import { App } from '/ui/App';
import '/styles/app.css';

const appEl = document.getElementById('root');

render(<App />, appEl);

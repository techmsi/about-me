import React from 'react';
import { render } from 'react-dom';
import { App } from '/ui/App';
import '/styles/app.css';
import * as serviceWorker from './serviceWorker';

const appEl = document.getElementById('root');

render(<App />, appEl);

serviceWorker.register();

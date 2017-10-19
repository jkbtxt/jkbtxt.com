import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './script/App';
import registerServiceWorker from './script/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();

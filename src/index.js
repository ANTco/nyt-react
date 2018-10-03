import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Form from '.'
import './index.css';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();

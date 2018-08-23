import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import HelloWorld from './HelloWorld';
//import Event from './Event';
import Translate from './Translate';

ReactDOM.render(
//<Event />,
<Translate />,
document.getElementById('root'));
registerServiceWorker();

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

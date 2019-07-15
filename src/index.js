// Import React libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Import master CSS
import './reset.css';
import './index.css';

// Import all required components
import App from './components/App';

// Import the service worker
import * as serviceWorker from './serviceWorker';


// Render the entire App into the HTML document
ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

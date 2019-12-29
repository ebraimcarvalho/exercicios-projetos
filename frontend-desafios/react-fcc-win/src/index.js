import React from 'react'
import ReactDOM from 'react-dom'
import './style.css';
import * as serviceWorker from './serviceWorker';

import MyApp2 from './MyApp2'

ReactDOM.render(
  <MyApp2 />,
  document.getElementById('root')
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

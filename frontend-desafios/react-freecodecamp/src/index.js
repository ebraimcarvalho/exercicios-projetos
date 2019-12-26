import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

function MyInfo() {
  return (
    <div>
      <h1>Ebraim Carvalho</h1>
      <p>I am learning React, and I want visit:</p>
      <ul>
        <li>Netherlands</li>
        <li>Portugal</li>
        <li>Canada</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById("root")
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

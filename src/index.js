import React from 'react';
import ReactDOM from 'react-dom';

import App_1 from './App_1';
import App_2 from './App_2';

ReactDOM.render(<App_1 />, document.getElementById('root'));

function nextWindow() {
  // alert("!")
  ReactDOM.render(<App_2 />, document.getElementById("root"));
}

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return(
      <p>Hello world!!!! Final project booyaaaaa</p>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

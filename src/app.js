import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling
import 'bulma/css/bulma.css';
import './scss/style.scss';

// Components
import CoursesIndex from './components/courses/Index';

// Static
import Home from './components/static/Home';

class App extends React.Component {
  render() {
    return(
      <main>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route exact path="/browsecourses" component={CoursesIndex} />
        </Switch>
      </main>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

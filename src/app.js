import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Styling
import 'bulma/css/bulma.css';
import './scss/style.scss';

// Components
import Header from './components/common/Header';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import CoursesIndex from './components/courses/Index';
import TemplatesIndex from './components/pages/templates/Index';
import PagesIndex from './components/pages/Index';
import CoursesNew from './components/courses/New';
import CoursesCreateIntro from './components/courses/CreateIntro';

// Static
import AuthBackground from './components/static/AuthBackground';

class App extends React.Component {
  render() {
    return(
      <main>
        <Header />
        {/* Auth - Background will render along with login and register */}
        <Route path="/auth" component={AuthBackground} />
        <Route path="/auth/register" component={AuthRegister} />
        <Route path="/auth/login" component={AuthLogin} />
        <Route path="/coursecreation/templates" component={TemplatesIndex} />
        <Route path="/coursecreation/pages" component={PagesIndex} />

        <Switch>
          {/* Courses */}
          <Route path="/browsecourses" component={CoursesIndex} />
        </Switch>

        {/* Modals */}
        <Switch>
          <Route path="*/newcourseintro" component={CoursesCreateIntro} />
          <Route path="*/newcoursesetup" component={CoursesNew} />
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

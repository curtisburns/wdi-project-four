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
import CourseOverview from './components/pages/CourseOverview';
import CoursesNew from './components/courses/New';
import CoursesShow from './components/courses/Show';
import CoursesCreateIntro from './components/courses/CreateIntro';
import PageOverview from './components/pages/PageOverview';
import PageContainer from './components/pages/PageContainer';
import CourseCreateSave from './components/pages/CreateSave';


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

        <Switch>
          {/* Courses */}
          <Route path="/browsecourses" component={CoursesIndex} />
          {/* Course Creation */}
          <Route path="/coursecreation/:courseId/editpage/:pageId" component={PageOverview} />
          <Route path ="/coursecreation/:courseId/pages" component={CourseOverview} />
          {/* Course Start */}
          <Route path ="/course/:courseId/page/:pageId" component={PageContainer} />

        </Switch>

        {/* Modals */}
        <Switch>
          <Route path="*/newcourseintro" component={CoursesCreateIntro} />
          <Route path="*/newcoursesetup" component={CoursesNew} />
          <Route path="*/startnewcourse/:courseId" component={CoursesShow} />
          <Route path="*/finish" component={CourseCreateSave} />
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

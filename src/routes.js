import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import DoctorPage from './components/doctor/DoctorPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="doctors" component={DoctorPage} />
    <Route path="course" component={ManageCoursePage} />
     <Route path="about" component={AboutPage} />
    <Route path="course/:id" component={ManageCoursePage} />
  </Route>
);

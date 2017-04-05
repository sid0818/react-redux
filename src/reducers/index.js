import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import docs from './doctorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,docs,
  ajaxCallsInProgress
});

export default rootReducer;

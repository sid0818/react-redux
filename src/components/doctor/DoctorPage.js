import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as  doctorAction from '../../actions/doctorAction';
import DocList from './DoctorListItem';
import {browserHistory} from 'react-router';

class DoctorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddDocsPage = this.redirectToAddDocsPage.bind(this);
  }

//  courseRow(course, index) {
//    return <div key={index}>{course.title}</div>;
//  }

  redirectToAddDocsPage() {
    browserHistory.push('/doctors');
  }

  render() {
    const {docs} = this.props;

    return (
      <div>
        <h1>Doctors</h1>
        <input type="submit"
               value="Add Doctors"
               className="btn btn-primary"
               onClick={this.redirectToAddDocsPage}/>
        <DocList docs={docs}/>
      </div>
    );
  }
}

DoctorPage.propTypes = {
  docs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    docs: state.docs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(doctorAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorPage);

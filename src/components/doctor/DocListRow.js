import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const DocListRow = ({doc}) => {
  return (
    <tr>
      <td><a href={doc.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/doc/' + doc.id}>{doc.Name}</Link></td>
      <td>{doc.Address}</td>
      <td>{doc.category}</td>
       <td>{doc.Phonenumber}</td>
      <td>{doc.State}</td>
    </tr>
  );
};

DocListRow.propTypes = {
  doc: PropTypes.object.isRequired
};

export default DocListRow;

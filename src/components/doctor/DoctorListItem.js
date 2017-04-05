import React, {PropTypes} from 'react';
import DocListRow from './DocListRow';

const DocList = ({docs}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>State</th>
      </tr>
      </thead>
      <tbody>
      {docs.map(doc =>
        <DocListRow key={doc.id} doc={doc}/>
      )}
      </tbody>
    </table>
  );
};

DocList.propTypes = {
  docs: PropTypes.array.isRequired
};

export default DocList;

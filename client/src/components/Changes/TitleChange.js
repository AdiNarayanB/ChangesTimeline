import React from 'react';

const TitleChange = ({ change }) => (
  <div className="change-item">
    <p><strong>User:</strong> {change.userid}</p>
    <p>Updated Title from <strong>{change.oldValue}</strong> to <strong>{change.newValue}</strong></p>
    <p><strong>Date: </strong> {change.created_at}</p>
  </div>
);

export default TitleChange


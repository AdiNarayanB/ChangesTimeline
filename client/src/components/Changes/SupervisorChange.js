import React from 'react';

const SupervisorChange = ({ change }) => (
  <div className="change-item">
    <p><strong>User:</strong> {change.userid}</p>
    <p>Updated Supervisor from <strong>{change.oldValue}</strong> to <strong>{change.newValue}</strong></p>
    <p><strong>Date: </strong> {change.created_at}</p>
  </div>
);

export default SupervisorChange

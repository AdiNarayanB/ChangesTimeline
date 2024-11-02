import React from 'react';

const SalaryChange = ({ change }) => (
  <div className="change-item">
    <p><strong>User:</strong> {change.userid}</p>
    <p>Updated salary from <strong>{change.oldValue}</strong> to <strong>{change.newValue}</strong></p>
    <p><strong>Date:</strong> {change.created_at}</p>
  </div>
);

export default SalaryChange;


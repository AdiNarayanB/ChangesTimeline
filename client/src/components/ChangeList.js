import React from 'react';
import DepartmentChange from './Changes/DepartmentChange';
import LocationChange from './Changes/LocationChange';
import SalaryChange from './Changes/SalaryChange';
import TitleChange from './Changes/TitleChange';
import SupervisorChange from './Changes/SupervisorChange';


const ChangeList = ({ changes }) => {
  const renderChange = (change) => {
    switch (change.changeType) {
      case 'department':
        return <DepartmentChange key={change.created_at} change={change} />;
      case 'location':
        return <LocationChange key={change.created_at} change={change} />;
      case 'salary':
        return <SalaryChange key={change.created_at} change={change} />;

      default:
        return (
          <div key={change.created_at} className="change-item">
            <p><strong>User:</strong> {change.userid}</p>
            <p>Changed {change.changeType} from <strong>{change.oldValue}</strong> to <strong>{change.newValue}</strong></p>
            <p><strong>Date:</strong> {change.created_at}</p>
          </div>
        );
    }
  };

  return (
    <div>
      <h3>Changes List</h3>
      {changes.map((change) => renderChange(change))}
    </div>
  );
};

export default ChangeList;


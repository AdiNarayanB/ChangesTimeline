import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ onFetchChanges }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFetch = () => {
    if (startDate && endDate) {
      const date1 = startDate.toISOString().slice(0, 19).replace('T', ' ');
      const date2 = endDate.toISOString().slice(0, 19).replace('T', ' ');
      onFetchChanges(date1, date2);
    }
  };

  return (
    <div>
      <h3>Select Date Range</h3>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholderText="Start Date" />
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} placeholderText="End Date" />
      <button onClick={handleFetch}>Fetch Changes</button>
    </div>
  );
};

export default DateInput;


// App.js
import React, { useState } from 'react';
import axios from 'axios';
import DateInput from './components/DatePicker';
import ChangeList from './components/ChangeList';

const App = () => {
  const [changes, setChanges] = useState([]);

  const fetchChanges = async (date1, date2) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/getChanges/${date1}/${date2}`);
      setChanges(response.data);
    } catch (error) {
      console.error('Error fetching changes:', error);
    }
  };

  return (
    <div className="App">
      <h2>Change Tracker</h2>
      <DateInput onFetchChanges={fetchChanges} />
      <ChangeList changes={changes} />
    </div>
  );
};

export default App;


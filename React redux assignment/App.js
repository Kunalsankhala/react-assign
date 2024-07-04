import React, { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'ankit', email: 'john@example.com' },
    { id: 2, name: 'amit', email: 'jane@example.com' },
    { id: 3, name: 'arijit', email: 'bob@example.com' },
    { id: 4, name: 'sachin', email: 'alice@example.com' },
    { id: 5, name: 'sachin', email: 'michael@example.com' },
    { id: 6, name: 'mayur', email: 'emily@example.com' },
    { id: 7, name: 'David', email: 'david@example.com' },
    { id: 8, name: 'samir', email: 'sarah@example.com' },
    { id: 9, name: 'Jay', email: 'james@example.com' },
    { id: 10, name: 'dhruv', email: 'olivia@example.com' }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;


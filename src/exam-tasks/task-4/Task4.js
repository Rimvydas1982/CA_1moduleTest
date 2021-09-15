import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Task4() {
  // Hooks
  //local
  const [users, setUsers] = useState([]);
  // side effects
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);
  return (
    <div>
      <h3>Task 4</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street},{user.address.city}
                </td>
                <td>{user.phone}</td>
                <td>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/

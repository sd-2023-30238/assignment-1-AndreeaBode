import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import moment from 'moment';

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/dreamService/getAllDreams");
    setUsers(result.data);
  };
  

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };
  
  return (
    <div className="container">
      <div className="py-4">
        <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Descriere</th>
            <th scope="col">Stres</th>
            <th scope="col">Energie</th>
            <th scope="col">Data</th>
            <th scope="col">Durata</th>
            <th scope="col">Tag</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope="row">{user.id}</th>
              <td>{user.descriere}</td>
              <td>{user.durata}</td>
              <td>{user.energie}</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                {moment(user.data).format('YYYY-MM-DD')}
              </td>
              <td>{user.stres}</td>
              <td>{user.tag}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}
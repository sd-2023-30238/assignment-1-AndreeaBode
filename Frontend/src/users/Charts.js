import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

import { Link, useParams } from "react-router-dom";
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";


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
  const chartData = users.map((user) => ({
    name: moment(user.data).format('MMMM Do YYYY, h:mm:ss a'),
    stress: user.stres,
    duration: user.durata,
    energy:user.energie
  }));
  
  return (<div> <br></br><br></br><br></br>
  
  <div className="chart">
            
            <BarChart width={500} height={300} data={chartData} margin={{
              top: 4,
              right: 50,
              left: 90,
              bottom: 4,
          }}
          barSize={20}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stress" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
            <BarChart width={500} height={300} data={chartData} margin={{
             top: 4,
             right: 50,
             left: 90,
             bottom: 4,
          }}
          barSize={20}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="duration" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
            <BarChart width={500} height={300} data={chartData} margin={{
           top: 4,
           right: 50,
           left: 90,
           bottom: 4,
          }}
          barSize={20}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="data"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="energy" fill="#8884d8" background={{ fill: "#eee" }} />
            </BarChart>
          
       </div>
       </div>
  );
  
}

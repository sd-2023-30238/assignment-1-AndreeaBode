import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';
import { useParams } from "react-router-dom";
import {
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const CHART_TYPES = {
  STRESS: "stress",
  DURATION: "duration",
  ENERGY: "energy"
};


const chartFactory = (chartData, type) => {
  switch (type) {
    case CHART_TYPES.STRESS:
      return (
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
      );
    case CHART_TYPES.DURATION:
      return (
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
          <Bar dataKey="duration" fill="#82ca9d" background={{ fill: "#eee" }} />
        </BarChart>
      );
    case CHART_TYPES.ENERGY:
      return (
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
          <Bar dataKey="energy" fill="#ffc658" background={{ fill: "#eee" }} />
        </BarChart>
      );
    default:
      return null;
  }
};

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

  const chartData = users.map((user) => ({
    data: moment(user.data).format('MMMM Do YYYY'),
    duration: user.stres,
   stress: user.durata,
    energy:user.energie
  }));

  return (
    <div>
      <br></br><br></br><br></br>
      <div className="chart">
        {chartFactory(chartData, CHART_TYPES.STRESS)}
        {chartFactory(chartData, CHART_TYPES.DURATION)}
        {chartFactory(chartData, CHART_TYPES.ENERGY)}
      </div>
    </div>
  );
}

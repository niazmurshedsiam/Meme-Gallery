import React from 'react';
// import "./styles.css";
import { BarChart, Bar } from "recharts";
const data = [
    {
      name: "Page A",
      uv: 40000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 30000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 20000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 27800,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 18900,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 23900,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 34900,
      pv: 4300,
      amt: 2100
    }
  ];
const Chart = () => {
    return (
        <BarChart width={450} height={350} data={data} style={{margin:'400px',marginTop:'100px',padding:'50px'}}>
            <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
    );
};

export default Chart;
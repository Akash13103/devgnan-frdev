import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const totalData = [
      { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
    { name: "Page D", uv: 4000, pv: 2400 },
  { name: "Page E", uv: 3000, pv: 1398 },
  { name: "Page F", uv: 2000, pv: 9800 },
    { name: "Page G", uv: 4000, pv: 2400 },
  { name: "Page H", uv: 3000, pv: 1398 },
  { name: "Page I", uv: 2000, pv: 9800 },
];

export default function AsianPaintsChart() {
  return (
    <Card sx={{ padding: 2, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">Total Views (Horizontal Stack)</Typography>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart
            data={totalData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

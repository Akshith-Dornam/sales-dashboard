'use client';
import React from 'react';
import {
  BarChart, Bar,
  LineChart, Line,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

type SalesData = {
  month: string;
  sales: number;
};

type Props = {
  data: SalesData[];
  type: 'Bar' | 'Line' | 'Pie';
};

const SalesChart = ({ data, type }: Props) => {
  switch (type) {
    case 'Bar':
      return (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      );
    case 'Line':
      return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
    case 'Pie':
      return (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="sales" nameKey="month" cx="50%" cy="50%" outerRadius={100}>
              {data?.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );
    default:
      return null;
  }
};

export default SalesChart;
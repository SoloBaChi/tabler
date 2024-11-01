import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieChartView = () => {
  const data = [
    { name: 'Value 2', value: 33.1 },
    { name: 'Value 3', value: 10.5 },
    { name: 'Value 1', value: 47.4 },
    { name: 'Value 4', value: 9.0 }
  ];

  const COLORS = ['#467fcf', '#c8d9f1', '#1c3353', '#7ea5dd'];

  return (
    <div style={{ width: '100%', height:280, maxWidth: '600px', margin: '0 auto' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%" // Use percentage for responsiveness
            fill="#8884d8"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartView;

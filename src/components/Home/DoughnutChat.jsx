import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DoughnutPieView = () => {
  const data = [
    { name: 'Value 1', value: 37.0 },
    { name: 'Value 2', value: 63.0 },
  ];

  const COLORS = ['#8ecf4d','#5dba2c'];

  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="80%"
            innerRadius="50%" // Hollow center for doughnut effect
            fill="#8884d8"
            labelLine={false} // Disable label lines
            label={({ value }) => `${value}%`} // Display values inside the chart
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

export default DoughnutPieView;

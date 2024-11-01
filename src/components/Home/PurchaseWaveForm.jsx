import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PurchasesWaveformChart = () => {
  // Generate sample data for a trading wave pattern
  const data = [];
  let lastValue = 200; // Starting point for the wave

  for (let i = 0; i < 100; i++) {
    // Generate random fluctuations
    const fluctuation = Math.random() * 20 - 10; // Random value between -10 and 10
    lastValue -= fluctuation; // Update last value based on fluctuation, reversing the trend
    data.push({ x: i, purchases: Math.max(lastValue, 0) }); // Ensure value doesn't go below 0
  }

  return (
    <div style={{ width: '100%', height: 300 }}>
      <div className="flex items-center gap-2 p-4">
      <span className='inline-block h-[15px] w-[15px] bg-[#0088FE]'></span>
      <h2 style={{ textAlign: 'left',fontSize:"16px" }}>Purchases</h2>
      </div>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="x" hide /> {/* Hiding x-axis for a cleaner look */}
          <YAxis hide /> {/* Hiding y-axis for a cleaner look */}
          <Tooltip />
          <Line
            type="monotone"
            dataKey="purchases"
            stroke="#0088FE"
            strokeWidth={2}
            dot={false} // No dots on the line
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PurchasesWaveformChart;

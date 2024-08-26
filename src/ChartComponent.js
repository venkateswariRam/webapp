// src/ChartComponent.js
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch('/api/sales-growth-over-time')
      .then(response => response.json())
      .then(data => {
        const labels = data.map(item => item.date); // Extract the dates
        const values = data.map(item => item.sales); // Extract the sales figures

        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Sales Growth Over Time',
              data: values,
              fill: false,
              backgroundColor: 'rgba(75,192,192,0.6)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        });
      });
  }, []);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;

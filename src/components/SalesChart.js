import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchTotalSales } from '../services/api';

const SalesChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const getSalesData = async () => {
      const { data } = await fetchTotalSales();
      setChartData({
        labels: data.dates,
        datasets: [
          {
            label: 'Total Sales',
            data: data.sales,
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
          },
        ],
      });
    };

    getSalesData();
  }, []);

  return (
    <div>
      <h2>Total Sales Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SalesChart;

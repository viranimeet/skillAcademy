import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const BarChart = ({ chartData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartData.length === 0) return;

    const ctx = chartRef.current.getContext("2d");
    const newChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: chartData.map((data) => data.coursename),
        datasets: [
          {
            label: "Purchase Count",
            data: chartData.map((data) => data.purchaseCount),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            type: "linear",
            beginAtZero: true,
            ticks: {
              stepSize: 1,
            },
          },
        },
      },
    });

    return () => {
      newChartInstance.destroy();
    };
  }, [chartData]);

  return <canvas ref={chartRef} />;
};

export default BarChart;
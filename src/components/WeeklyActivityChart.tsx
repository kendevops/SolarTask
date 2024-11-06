/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import CardContainer from "./common/CardContainer";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getWeeklyActivityData, WeeklyActivityData } from "../api";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: WeeklyActivityData = await getWeeklyActivityData();

      setChartData({
        labels: data.labels,
        datasets: [
          {
            label: "Withdraw",
            data: data.withdrawData,
            backgroundColor: "#232323",
            borderRadius: 30,
            borderSkipped: false,
            maxBarThickness: 18,
          },
          {
            label: "Deposit",
            data: data.depositData,
            backgroundColor: "#396AFF",
            borderRadius: 30,
            borderSkipped: false,
            maxBarThickness: 18,
          },
        ],
      });
    };

    fetchData();
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          color: "#718EBF",
          borderRadius: 40,
          boxWidth: 15,
          boxHeight: 15,
          padding: 10,
          usePointStyle: true,
          font: {
            size: 15,
            family: "inter",
          },
        },
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          color: "#e5e7eb",
        },
        ticks: {
          color: "#6b7280",
        },
      },
    },
  };

  return (
    <CardContainer title="Weekly Activity" className="col-span-2">
      <div className="bg-white p-8 h-72 rounded-2xl">
        {chartData ? (
          <Bar data={chartData} options={options} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </CardContainer>
  );
};

export default WeeklyActivityChart;

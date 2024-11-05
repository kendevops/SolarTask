/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import CardContainer from "./common/CardContainer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const BalanceHistoryChart: React.FC = () => {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#DFE5EE",
        },
        ticks: {
          color: "#6b7280",
        },
        border: {
          dash: [5, 5],
        },
      },
      y: {
        grid: {
          color: "#DFE5EE",
        },
        ticks: {
          color: "#6b7280",
          stepSize: 200,
        },
        border: {
          dash: [5, 5],
        },
      },
    },
  };

  const data: ChartData<"line"> = useMemo(() => {
    return {
      labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
      datasets: [
        {
          label: "Balance",
          data: [200, 400, 300, 700, 500, 600, 700],
          borderColor: "#3b82f6",
          backgroundColor: (context: any) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;

            if (!chartArea) {
              return null;
            }

            const gradient = ctx.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );
            gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
            gradient.addColorStop(1, "rgba(45, 96, 255, 0)");

            return gradient;
          },
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }, []);

  return (
    <CardContainer title="Balance History" className="col-span-2">
      <div className="bg-white p-8 h-72 rounded-2xl">
        <Line data={data} options={options} />
      </div>
    </CardContainer>
  );
};

export default BalanceHistoryChart;

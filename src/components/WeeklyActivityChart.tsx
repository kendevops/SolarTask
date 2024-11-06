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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WeeklyActivityChart = () => {
  const data = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Withdraw",
        data: [400, 100, 150, 200, 250, 200, 150],
        backgroundColor: "#232323",
        borderRadius: 30,
        borderSkipped: false,
        maxBarThickness: 18,
      },
      {
        label: "Deposit",
        data: [300, 200, 300, 400, 480, 400, 300],
        backgroundColor: "#396AFF",
        borderRadius: 30,
        borderSkipped: false,
        maxBarThickness: 18,
      },
    ],
  };

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
        <Bar data={data} options={options} />
      </div>
    </CardContainer>
  );
};

export default WeeklyActivityChart;

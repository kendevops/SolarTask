/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import CardContainer from "./common/CardContainer";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatistics = () => {
  const data = {
    labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
    datasets: [
      {
        data: [30, 15, 35, 20],
        backgroundColor: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
        offset: [30, 40, 10, 0],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: { label: string; raw: any }) =>
            `${tooltipItem.label}: ${tooltipItem.raw}%`,
        },
      },
      datalabels: {
        formatter: (value: string, context: Context) => {
          const label = context.chart.data.labels?.[context.dataIndex] || "";
          return `${value}%\n${label}`;
        },
        color: "#fff",
        font: {
          size: 12,
          weight: "bold" as const,
          family: "inter",
        },
        textAlign: "center" as const,
        rotation: (context: any) => {
          const startAngle =
            context.chart.getDatasetMeta(0).data[context.dataIndex]?.startAngle;
          const endAngle =
            context.chart.getDatasetMeta(0).data[context.dataIndex].endAngle;
          const midAngle = (startAngle + endAngle) / 2;
          const rotation = (midAngle * 195) / Math.PI;
          return rotation;
        },
        align: "center" as const,
      },
    },
  };

  return (
    <CardContainer title="Expense Statistics">
      <div className="bg-white h-72 flex items-center justify-center rounded-2xl">
        <Pie data={data} options={options} />
      </div>
    </CardContainer>
  );
};

export default ExpenseStatistics;

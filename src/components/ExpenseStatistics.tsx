/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import CardContainer from "./common/CardContainer";
import { getExpenseStatisticsData, ExpenseStatisticsData } from "../api";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const ExpenseStatistics = () => {
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data: ExpenseStatisticsData = await getExpenseStatisticsData();

      setChartData({
        labels: data.labels,
        datasets: [
          {
            data: data.data,
            backgroundColor: data.backgroundColors,
            offset: data.offsets,
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
        {chartData ? (
          <Pie data={chartData} options={options} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </CardContainer>
  );
};

export default ExpenseStatistics;

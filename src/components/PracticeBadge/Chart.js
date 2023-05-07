import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = [
  "Jan 2022",
  "Feb 2022",
  "Mar 2022",
  "Apr 2022",
  "May 2022  ",
  "Jun 2022",
  "Jul 2022",
  "Aug 2022",
  "Sep 2022",
  "Oct 2022",
  "Nov 2022",
  "Dec 2022",
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
  "May 2023",
];

const Chart = ({ points }) => {
  let data = {
    labels,
    datasets: [
      {
        label: "Contest Ratings",
        data: points,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;

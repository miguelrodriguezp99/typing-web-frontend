import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "./Data";

function LineChart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tension: 0.5,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false, // Esto asegura que el aspect ratio no se mantenga y permita dimensiones fijas
  };

  const userData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-w-[950px] min-h-[200px] ml-10">
      <Line data={userData} options={options} />
    </div>
  );
}

export default LineChart;

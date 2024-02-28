/* eslint-disable no-undef */
import React, { useState } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";
import LineChart from "./LineChart";

const ChartComp = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gain",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],

        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </>
  );
};

export default ChartComp;

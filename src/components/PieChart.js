import React from "react";
import { Pie } from "react-chartjs-2";

export default function PieChart(props) {
  return (
    <div className="pieChart">
      <Pie
        options={{
          legend: {
            labels: {
              // This more specific font property overrides the global property
              fontColor: "white"
            }
          }
        }}
        data={props.chartData}
      />
    </div>
  );
}

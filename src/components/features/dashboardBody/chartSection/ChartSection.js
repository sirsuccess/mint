import React from "react";
import ProgressCard from "./progressCard/ProgressCard";
// import Chart from "./chart/Chart";
import "./ChartSection.css";
import Date from "../../../commons/date";

function ChartSection() {
  return (
    <div className="ChartSection">
      <div className="chart2">
        {/* <Chart /> */}
        Today: <Date />
        <div className="graph-img">
          <img
            src={"./assets/img/bigChart.png"}
            alt="Bell icon"
            className="Bell"
            style={{
              // objectFit: "",
              height: "300px",
              width: "100%",
              position: "relative"
            }}
          />
        </div>
      </div>
      <div className="progress">
        <ProgressCard />
      </div>
    </div>
  );
}

export default ChartSection;

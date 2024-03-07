// src/components/BentoGrid.js
import React from "react";
import "./BentoGrid.css";

// import chart.js and charts
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import Bargraph from "./graphs/Bargraph";

// import data
import BarData from "../data/BarData.json";


ChartJS.register(CategoryScale);

function BentoGrid() {

    // functions to handle charts
    // bar graph data
    // ==========================================================================================
        let barGraphData = {
            labels: BarData.map((data)=>data.genre),
            datasets: [{
                label: "Number of Copies",
                data: BarData.map((data)=>data.units_sold),
                backgroundColor: ["#51A1C5"],
            }]
        };
        let barGraphOpt = {
            plugins: {
                title: {
                  display: true,
                  text: "Games sold per genre"
                }
              }, 
              maintainAspectRatio : false,
            //   aspectRatio : 0.3,
        }
    // ==========================================================================================

  return (
    <div className="wrapper">
        <div className="grid1">1</div>
        <div className="grid2">
        <Bargraph chartData={barGraphData} chartOpt={barGraphOpt} />
        </div>
        <div className="grid3">
            
        </div>
        <div className="grid4">4</div>
        <div className="grid5">5</div>
    </div>
  );
}
export default BentoGrid;
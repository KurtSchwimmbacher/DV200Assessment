// src/components/BentoGrid.js
import React from "react";
import "./BentoGrid.css";

// import chart.js and charts
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import Bargraph from "./graphs/Bargraph";
import Doughnut from "./graphs/Doughnut";

// import data
import BarData from "../data/BarData.json";
import doughnutData from "../data/DoughnutData.json";

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
        };
    // ==========================================================================================

    // doughnut graph data
    // ==========================================================================================
    let doughnutChartData = {
        labels: doughnutData.map((data)=>data.genre),
        datasets: [{
            label: "Copies stocked",
            data: doughnutData.map((data)=>data.inStock),
            backgroundColor: ["#51A1C5","#C73032","#AB6DAC","#2A50A1","#E7623E"],
        }]
    };
    let doughnutChartOpt = {
        plugins: {
            title: {
              display: true,
              text: "Games per genre in stock"
            }
          }, 
          maintainAspectRatio : false,
          aspectRatio: 0.9,
    };
    // ==========================================================================================

  return (
    <div className="wrapper">
        <div className="grid1">
       
        </div>
        <div className="grid2">
        <Bargraph chartData={barGraphData} chartOpt={barGraphOpt} />
        </div>
        <div className="grid3">
            
        </div>
        <div className="grid4">4</div>
        <div className="grid5">
        <Doughnut chartData={doughnutChartData} chartOpt={doughnutChartOpt} />
        </div>
    </div>
  );
}
export default BentoGrid;
// src/components/BentoGrid.js
import React from "react";
import "./BentoGrid.css";

// import chart.js and charts
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import Bargraph from "./graphs/Bargraph";
import Doughnut from "./graphs/Doughnut";
import LineGraph from "./graphs/Linegraph";
import Polarchart from "./graphs/Polarchart";
import Piechart from "./graphs/Piechart";

// import data
import BarData from "../data/BarData.json";
import doughnutData from "../data/DoughnutData.json";
import LineGaphData from "../data/LineGraph.json";
import PolarChartData from "../data/PolarChartData.json";
import pieChartData from "../data/PieData.json";

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
                backgroundColor:  ["#51A1C5","#C73032","#AB6DAC","#2A50A1","#E7623E"],
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

    // linegraph graph data
    // ==========================================================================================
    let lineData = {
        labels: LineGaphData.map((data)=>data.label),
        datasets: [{
            label: "units sold",
            data: LineGaphData.map((data)=>data.sales),
            backgroundColor: ["#51A1C5"],
        }]
    }
    let lineOpt = {
        plugins: {
            title: {
              display: true,
              text: "Monthly Sales of FPS Games"
            }
          }, 
          maintainAspectRatio : false,
    }
    // ==========================================================================================

    // polar area chart data
    // ==========================================================================================
    let polarData = {
        labels: PolarChartData.map((data)=>data.genre),
        datasets: [{
            label: "Highest Sale",
            data: PolarChartData.map((data)=>data.highest_Sales),
            backgroundColor: ["#51A1C596","#C7303296","#AB6DAC96","#2A50A196","#E7623E96"],
        }]
    }
    let polarOpt = {
        plugins: {
            title: {
              display: true,
              text: "Highest Recorded Sale per Genre"
            }
          }, 
          maintainAspectRatio : false,
    }
    // ==========================================================================================
    
    // scatter chart data
    // ==========================================================================================
    let PieData = {
        labels: pieChartData.map((data)=>data.genre),
        datasets:[{
            label:"Game Titles Released",
            data: pieChartData.map((data)=>data.released),
            backgroundColor: ["#51A1C5"],
        }]
    }
    let PieOpt = {
        plugins: {
            title: {
              display: true,
              text: "Games per Genre Released this Month"
            }
          }, 
          maintainAspectRatio : false,
    }
    // ==========================================================================================

  return (
    <div className="wrapper">
        <div className="grid1">
        <Polarchart chartData={polarData} chartOpt={polarOpt} />
        </div>
        <div className="grid2">
        <Bargraph chartData={barGraphData} chartOpt={barGraphOpt} />
        </div>
        <div className="grid3">
            <LineGraph chartData={lineData} chartOpt={lineOpt} />
        </div>
        <div className="grid4">
            <Piechart chartData={PieData} chartOpt={PieOpt} />
        </div>
        <div className="grid5">
        <Doughnut chartData={doughnutChartData} chartOpt={doughnutChartOpt} />
        </div>
    </div>
  );
}
export default BentoGrid;
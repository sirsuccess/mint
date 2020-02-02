import React, { Component } from "react";

// Import fusioncharts.js files from fusioncharts module
import FusionCharts from "fusioncharts";
// Import the timeseries file from fusioncharts module
import TimeSeries from "fusioncharts/fusioncharts.timeseries";
// Import ReactFusioncharts from react-fusioncharts module
// import ReactFC from 'react-fusioncharts';
import ReactFC from "react-fusioncharts";

import ChartData from "../../../../../data/chartData";
import Date from "../../../../commons/date";

import "./Chart.css";

// Add core FusionCharts module and TimeSeries module as dependecies in react-fusioncharts
ReactFC.fcRoot(FusionCharts, TimeSeries);

// This is the remote url to fetch the data.
const dataFetch = ChartData;

// This is the remote url to fetch the schema.
const schemaFetch = [
  {
    name: "Time",
    type: "date",
    format: "%d-%b-%y"
  },
  {
    name: "Payments",
    type: "number"
  }
];

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Here timeseriesDs is the configuration object which we will pass as a prop to our ReactFC component.
      timeseriesDs: {
        type: "timeseries",
        renderAt: "container",
        width: "100%",
        height: "250",
        // usePlotGradientColor: "1",
        // plotGradientColor: "#ffffff",
        
        dataSource: {
          //   caption: { text: 'Online Sales of a SuperStore in the US' },
          // Initially data is set as null
          chart: {
            showlegend: 0,
            // palettecolors: "#165952",
            usePlotGradientColor: "1",
            plotGradientColor: "#ffffff"
            // palettecolors: "#165952",
            // bgColor: "#165952",
            // palettecolors: "5d62b5,29c3be,f2726f"
          }
        }
      }
    };

    // In this method we will create our DataStore and using that we will create a custom DataTable which takes two
    // parameters, one is data another is schema. Check the method definition to get more info.
    this.createDataTable = this.createDataTable.bind(this);
  }

  createDataTable() {
    Promise.all([dataFetch, schemaFetch]).then(res => {
      const data = res[0];
      const schema = res[1];
      // First we are creating a DataStore
      const fusionDataStore = new FusionCharts.DataStore();
      // After that we are creating a DataTable by passing our data and schema as arguments
      const fusionTable = fusionDataStore.createDataTable(data, schema);
      // After that we simply mutated our timeseries datasource by attaching the above
      // DataTable into its data property.
      const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
      timeseriesDs.dataSource.data = fusionTable;
      this.setState({
        timeseriesDs
      });
    });
  }

  // We are creating the DataTable immidietly after the component is mounted
  componentDidMount() {
    this.createDataTable();
  }

  render() {
    return (
      <div className="App">
        <div className="date">
          Today: <Date />{" "}
        </div>
        <ReactFC {...this.state.timeseriesDs} />
      </div>
    );
  }
}

export default Chart;

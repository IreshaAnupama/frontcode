import React from "react";
import Chart from "react-google-charts";

class RouteCharts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.hideCharts) {
      return <div></div>;
    }
    if (this.props.chartData.durationData.length === 1) {
      return <div>No data -- routing method not supported in this region?</div>;
    }
    return (
      <div>
        <Chart
          width={"300px"}
          height={"250px"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={this.props.chartData.durationData}
          options={{
            title: "Route Duration (seconds)",
            legend: { position: "none" },
            histogram: {
              minValue: 0,
              maxValue: 1000,
            },
          }}
          rootProps={{ "data-testid": "3" }}
        />
        <Chart
          width={"300px"}
          height={"250px"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={this.props.chartData.distanceData}
          options={{
            title: "Route Length (meters)",
            legend: { position: "none" },
            histogram: {
              minValue: 0,
              maxValue: 5000,
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
        <Chart
          width={"300px"}
          height={"250px"}
          chartType="Histogram"
          loader={<div>Loading Chart</div>}
          data={this.props.chartData.latencyData}
          options={{
            title: "Request Latency (milliseconds)",
            legend: { position: "none" },
            histogram: {
              minValue: 0,
              maxValue: 3000,
              maxNumBuckets: 100,
              bucketSize: 30,
              lastBucketPercentile: 5,
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    );
  }
}

export { RouteCharts };
import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import "./month.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}

	toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}

	render() {
		const options = {
			theme: "light2",
			animationEnabled: true,
			backgroundColor: "#3d035800",
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "spline",
				name: "Units Sold",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0 Units",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 120 },
					{ x: new Date(2017, 1, 1), y: 135 },
					{ x: new Date(2017, 2, 1), y: 144 },
					{ x: new Date(2017, 3, 1), y: 103 },
					{ x: new Date(2017, 4, 1), y: 93 },
					{ x: new Date(2017, 5, 1), y: 129 },
					{ x: new Date(2017, 6, 1), y: 143 },
					{ x: new Date(2017, 7, 1), y: 156 },
					{ x: new Date(2017, 8, 1), y: 122 },
					{ x: new Date(2017, 9, 1), y: 106 },
					{ x: new Date(2017, 10, 1), y: 137 },
					{ x: new Date(2017, 11, 1), y: 142 }
				]
			},
			{
				type: "spline",
				name: "Profit",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.#",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 19034.5 },
					{ x: new Date(2017, 1, 1), y: 20015 },
					{ x: new Date(2017, 2, 1), y: 27342 },
					{ x: new Date(2017, 3, 1), y: 20088 },
					{ x: new Date(2017, 4, 1), y: 20234 },
					{ x: new Date(2017, 5, 1), y: 29034 },
					{ x: new Date(2017, 6, 1), y: 30487 },
					{ x: new Date(2017, 7, 1), y: 32523 },
					{ x: new Date(2017, 8, 1), y: 20234 },
					{ x: new Date(2017, 9, 1), y: 27234 },
					{ x: new Date(2017, 10, 1), y: 33548 },
					{ x: new Date(2017, 11, 1), y: 32534 }
				]
			}]
		}


		return (
			<div className="border">
				<CanvasJSChart options={options} containerProps={{ width: '100%', height: '300px' }} onRef={ref => this.chart = ref} />
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}

}

export default App;
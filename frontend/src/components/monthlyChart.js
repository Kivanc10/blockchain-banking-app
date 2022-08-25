import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      backgroundColor: "#3d035800",
      title: {
        text: "Distrubution",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Inheritor 1 name" },
            { y: 49, label: "Your balance" },
            { y: 9, label: "Inheritor 2 name" },
            { y: 5, label: "Inheritor 3 name" },
            { y: 19, label: "Inheritor 4 name" },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          containerProps={{ width: "100%", height: "300px" }}
          options={options}
        />
      </div>
    );
  }
}
export default App;

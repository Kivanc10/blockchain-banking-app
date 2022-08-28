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
          dataPoints: []
          // [
          //   { y: 18, label: "Inheritor 1 name", color: "#FD006A" },
          //   { y: 49, label: "Your balance", color: "#F4298F" },
          //   { y: 9, label: "Inheritor 2 name", color: "#EB52B3" },
          //   { y: 5, label: "Inheritor 3 name", color: "#E17AD8" },
          //   { y: 19, label: "Inheritor 4 name", color: "#D8A3FC" },
          // ],
        },
      ],
    };

    let colors = ["#FD006A", "#F4298F", "#E17AD8", "#D8A3FC"];
    // window.alert(this.props.userBalance)
    console.log("props.userbalance - > ", this.props.userBalance)
    let userBalance = parseInt(this.props.userBalance)
    // window.alert(JSON.stringify(this.props.chartData))
    if (this.props.chartData !== undefined) {
      let numberOFChild = this.props.chartData.length;
      let childBals = 0;
      if (numberOFChild !== 0) {
        console.log("chartdata ---> ", this.props.chartData[0][0])

        this.props.chartData[0].forEach((e, i) => {
          if (e.name !== undefined) {
            // window.alert(e[1].toString())
            window.alert(this.props.chartData)
            childBals += parseInt(e.balance.toString());   

            //window.alert(e.balance.toString())
          }
        })
        //  window.alert(childBals)
        this.props.chartData[0].forEach((e, i) => {
          if (e.name !== undefined) {
            if (i >= colors.length) {
              options.data[0].dataPoints.push(
                { y: (e.balance * 100) / (userBalance + childBals), label: e.name, color: "aqua" } // parseInt((e.balance * 100)/(userBalance + childBals))
              )
            } else {
              options.data[0].dataPoints.push(
                { y: (e.balance * 100) / (userBalance + childBals), label: e.name, color: colors[i] } // parseInt((e.balance * 100)/(userBalance + childBals))
              )
            }

          }
        })
        
        options.data[0].dataPoints.push(
          { y: parseInt((userBalance * 100) / (userBalance + childBals)), label: "Your balance", color: "red" } // parseInt((userBalance * 100) / (userBalance + childBals))
        )
      } else {
        options.data[0].dataPoints.push(
          { y: parseInt((userBalance * 100) / (userBalance + childBals)), label: "Your balance", color: "red" }
        )
      }
    } else {
      window.alert("undefined")
    }
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

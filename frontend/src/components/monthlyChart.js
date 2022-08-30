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
    //  window.alert(JSON.stringify(this.props.chartData))
    if (this.props.chartData !== undefined) {
      let numberOFChild = this.props.chartData.length;
      let childBals = 0;
      if (numberOFChild !== 0) {
        console.log("chartdata(all) ---> ", this.props.chartData)
        console.log("chartdata ---> ", this.props.chartData[0][0])

        this.props.chartData.forEach((e, i) => {
          if (e[0].name !== undefined) {
            // window.alert(e[1].toString())
            //  window.alert(this.props.chartData)
            // window.alert(parseInt(e.balance.toString()))
            childBals += Math.round(parseInt(e[0].balance.toString())*0.000000000000000001)
            // window.alert("xzxas")
            //window.alert(e.balance.toString())
          }
          // window.alert(childBals)
        })
        //  window.alert(childBals)
        this.props.chartData.forEach((e, i) => {
          console.log("n --> ",e[0].balance.toString())
          if (e[0].name !== undefined) {
            if (i >= colors.length) {
              options.data[0].dataPoints.push(
                { y: (Math.round(e[0].balance.toString()) *0.000000000000000001 * 100) / (userBalance + childBals), label: e[0].name, color: "aqua" } // parseInt((e.balance * 100)/(userBalance + childBals))
              )
            } else {
              options.data[0].dataPoints.push(
                { y: (Math.round(e[0].balance.toString()) *0.000000000000000001 * 100) / (userBalance + childBals), label: e[0].name, color: colors[i] } // parseInt((e.balance * 100)/(userBalance + childBals))
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

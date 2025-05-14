import React from "react";
import "../Theme.css";
import "./css/Graph.css";
import Plot from "react-plotly.js";
import { useGlobalContext } from "../contexts/globalContextProvider"

const Graph = () => {
  const { globalTheme, graph } = useGlobalContext();
  const config = {
    responsive: true,
    displayModeBar: false,
    scrollZoom: false,
    staticPlot: true,
  }

  return (
    <div className="graphContainer">
      <div className="plotFrame">
        <Plot
          data={[
            {
              x: graph.x[0],
              y: graph.y[0],
              type: "scatter",
              mode: "lines",
              line: {
                shape: "spline",
                smoothing: 1.1,
                color: globalTheme.themeColor,
                width: 3,
              },
              name: "f(x) = x",
            },
          ]}
          layout={{
            title: "f(x)",
            xaxis: {
              range: graph.x[1],
              automargin: true,
              tickfont: {
                color: "white",
                size: 14,
              },
              linecolor: "white",
              gridcolor: "rgba(255,255,255, 0.2)",
              zerolinecolor: "yellow",
            },
            yaxis: {
              range: graph.y[1],
              automargin: true,
              tickfont: {
                color: "white",
                size: 14,
              },
              linecolor: "white",
              gridcolor: "rgba(255,255,255, 0.2)",
              zerolinecolor: "yellow",
            },
            autosize: true,
            plot_bgcolor: "transparent",
            paper_bgcolor: "transparent",
            transition: {
              duration: 500,
              easing: "cubic-in-out"
            }
          }}
          config={config}
          useResizeHandler
          className="graph"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default Graph;

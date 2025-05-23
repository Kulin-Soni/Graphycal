import React from "react";
import "../Theme.css";
import "./css/Graph.css";
import Plot from "react-plotly.js";
import { useGlobalContext } from "../contexts/globalContextProvider";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
const Graph = () => {
  const { globalTheme, graph } = useGlobalContext();
  const config = {
    responsive: true,
    displayModeBar: false,
    scrollZoom: true,
    staticPlot: false,
    showTips: false,
    showLink: false,
    editable: false,
  };

  return (
    <AnimatePresence>
      <motion.div initial={{opacity:0, x:-200}} animate={{opacity:1, x: 0}} transition={{duration: .4, type:"spring", damping: 15}} className="graphContainer">
        <div
          className="plotFrame"
        >
          <Plot
            data={[
              {
                x: graph.x[0],
                y: graph.y[0],
                type: "scatter",
                mode: "lines+markers",
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
                linewidth: 3,
                range: graph.x[1],
                automargin: true,
                tickfont: {
                  color: "white",
                  size: 14,
                },
                linecolor: "white",
                gridcolor: "rgba(255,255,255, 0.2)",
                gridwidth: 0.5,
                zerolinecolor: "yellow",
                zerolinewidth: 0.5,
              },
              yaxis: {
                linewidth: 3,
                range: graph.y[1],
                automargin: true,
                tickfont: {
                  color: "white",
                  size: 14,
                },
                linecolor: "white",
                gridcolor: "rgba(255,255,255, 0.2)",
                gridwidth: 0.5,
                zerolinecolor: "yellow",
                zerolinewidth: 0.5,
              },
              autosize: true,
              plot_bgcolor: "transparent",
              paper_bgcolor: "transparent",
              transition: {
                duration: 500,
                easing: "cubic-in-out",
              },
            }}
            config={config}
            useResizeHandler
            className="graph"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Graph;

import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import "../Theme.css";
import "./css/Controls.css";
import Hint from "../icons/Hint";
import Generate from "../icons/Generate";
import Automatic from "../icons/Automatic.jsx";
import genGraphPoints from "../utils/generateGraphPoints.js";
import { useGlobalContext } from "../contexts/globalContextProvider.jsx";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "motion/react";
import Manual from "../icons/Manual.jsx";
const Controls = () => {
  const [mode, setMode] = useState("auto");
  const { setGraph } = useGlobalContext();
  const { register: graphConst, handleSubmit: submitConst } = useForm({
    defaultValues: {
      startLimit: 0,
      maxPts: 100,
      margin: 0,
      gap: 1,
    },
  });
  const modeSet = useCallback(() => {
    setMode((prev) => (prev == "auto" ? "manual" : "auto"));
  }, []);
  // const functionHint = useCallback(() => {
  //   alert("This feature is in development.")
  // }, []);
  const submitForm = useCallback(
    (data) => {
      const dataPoints =
        data.limitOption == "manual"
          ? genGraphPoints(
              data.graphEqn,
              data.startLimit,
              data.maxPts,
              data.margin,
              data.gap
            )
          : genGraphPoints(data.graphEqn, 0, 100, 0, 1);
      console.log(dataPoints);
      if (dataPoints != -1) {
        setGraph(dataPoints);
        return;
      } else {
        alert("Equation couldn't be solved.");
        return;
      }
    },
    [setGraph]
  );
  return (
    <div className="controls">
      <form
        onSubmit={submitConst(submitForm)}
        id="form"
      >
        <AnimatePresence>
          <div className="gridContainer">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, type: "spring", damping: 15 }}
              className="chunks dcenter expression-container"
            >
              <h5 className="text fx-label">f(x) =</h5>
              <input
                type="text"
                {...graphConst("graphEqn", { required: true })}
                className="expression-input"
                placeholder="expression (eg: x^2+2)"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.125,
                type: "spring",
                damping: 15,
              }}
              className="chunks"
            >
              <div className="dcenter controls-container">
                <button
                  className="switch_Control"
                  onClick={(e) => {
                    e.preventDefault();
                    modeSet();
                  }}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={mode}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="label"
                    >
                      {mode == "auto" ? (
                        <div>
                          <div className="IconContainer">
                            <Automatic />
                          </div>
                          <div>
                            <h4 className="modeLabel">Auto</h4>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="IconContainer">
                            <Manual />
                          </div>
                          <div>
                            <h4 className="modeLabel">Manual</h4>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </div>
              <div className="modeOptions">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    className="modeOptionsContainer dcenter"
                    key={mode}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mode == "auto" ? (
                      <h3>
                        Controls are automatically set for your best experiece.
                      </h3>
                    ) : (
                      <div className="manualModeContainer dcenter">
                        <h3>Manual controls coming soon.</h3>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="submitBtnContainer dcenter">
                <button type="submit" className="submitBtn">
                  <div className="IconContainer">
                    <Generate />
                  </div>
                  <h3 className="submitBtnLabel">Generate</h3>
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      </form>
    </div>
  );
};

export default Controls;

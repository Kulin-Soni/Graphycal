import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import "../Theme.css";
import "./css/Controls.css";
import Hint from "../icons/Hint";
import Generate from "../icons/Generate";
import genGraphPoints from "../utils/generateGraphPoints.js"
import { useGlobalContext } from "../contexts/globalContextProvider";
const Controls = () => {
  const { setGraph } = useGlobalContext();
  const {
    register: graphConst,
    handleSubmit: submitConst,
    watch,
  } = useForm({
    defaultValues: {
      limitOption: "auto",
      startLimit: 0,
      maxPts: 100,
      margin: 0,
      gap: 1
    },
  });
  const functionHint = useCallback(() => {
    // alert("This feature is in development.")
  }, []);
  const submitForm = useCallback((data) => {
    const dataPoints = data.limitOption == "manual" ? genGraphPoints(data.graphEqn, data.startLimit, data.maxPts, data.margin, data.gap) : genGraphPoints(data.graphEqn, 0, 100, 0, 1);
    console.log(dataPoints);
    if (dataPoints!=-1){
      setGraph(dataPoints);
      return;
    } else {
      alert("Equation couldn't be solved.")
      return;
    }
  }, [setGraph]);

  const selectedLimitOption = watch("limitOption");
  return (
    <form onSubmit={submitConst(submitForm)} id="form">
      <div className="controlPanel">
        <div className="fncInputArea">
          <h2>f(x) =</h2>
          <input
            type="text"
            id="fncInput"
            {...graphConst("graphEqn", { required: true })}
          />
          <button
            onClick={() => {
              functionHint();
            }}
          >
            <Hint />
          </button>
        </div>
        <div className="controls">
          <div className="limitOptionsContainer">
            <input
              type="radio"
              value="auto"
              id="auto"
              className="hide"
              {...graphConst("limitOption")}
            />
            <label htmlFor="auto" className="lbllimitOption">
              Auto
            </label>
            <input
              type="radio"
              value="manual"
              id="manual"
              className="hide"
              {...graphConst("limitOption")}
            />
            <label htmlFor="manual" className="lbllimitOption">
              Manual
            </label>
          </div>
          <div className="manualControlsContainer">
            {selectedLimitOption == "auto" ? (
              <p className="autoControlledMsg">
                Controls are automatically set for your best experience.
              </p>
            ) : (
              <div className="manualControlsGrid">
                <div className="inputContainer">
                  <h6 className="numericInputLabels">Start (X) Points From:</h6>
                  <input
                    type="number"
                    id="startLimit"
                    className="numericInputs"
                    {...graphConst("startLimit")}
                  />
                </div>
                <div className="inputContainer">
                  <h6 className="numericInputLabels">Maximum Points: </h6>
                  <input
                    type="number"
                    id="maxIterations"
                    max="1000"
                    className="numericInputs"
                    {...graphConst("maxPts")}
                  />
                </div>
                <div className="inputContainer">
                  <h6 className="numericInputLabels">Margin: </h6>
                  <input
                    type="number"
                    id="margin"
                    min="0"
                    max="10"
                    className="numericInputs"
                    {...graphConst("margin")}
                  />
                </div>
                <div className="inputContainer">
                  <h6 className="numericInputLabels">Gap Between Points: </h6>
                  <input
                    type="number"
                    id="gap"
                    min="0"
                    max="10"
                    className="numericInputs"
                    {...graphConst("gap")}
                  />
                </div>
              </div>

            )}
          </div>
        </div>
        <div className="buttonHolder">
          <button className="generateButton" type="submit">
            <div>
              <Generate />
            </div>
            <h5>Generate</h5>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Controls;

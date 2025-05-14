import { simplify, parse, min, max } from "mathjs";
export default function genGraphPoints(equation, startLimit, maxPts, margin) {
  try {
  const simplifiedEqn = simplify(parse(equation));
  let xVals = [];
  let yVals = [];
  for (let i = startLimit || 0; i < maxPts + 1; i++) {
    xVals.push(i);
    yVals.push(simplifiedEqn.evaluate({ x: i }));
  }
  const minY = min(yVals);
  const maxY = max(yVals);
  return {x: [xVals, [xVals[0]+margin, xVals[xVals.length-1]+margin]], y: [yVals, [minY+margin, maxY+margin]]};
}
catch {
  return -1;
}}

import { simplify, parse, min, max } from "mathjs";
export default function genGraphPoints(equation, startLimit, maxPts, margin, gap) {
  try {
  const simplifiedEqn = simplify(parse(equation.trim()));
  let xVals = Array.from({length: maxPts}, (_, i)=>i-startLimit)
  let yVals = [];
  for (let i = startLimit || 0; i < (1+(maxPts-1)*gap) + 1; i+=gap) {
    yVals.push(simplifiedEqn.evaluate({ x: i }));
  }
  const minY = min(yVals);
  const maxY = max(yVals);
  return {x: [xVals, [xVals[0]+margin, xVals[xVals.length-1]+margin]], y: [yVals, [minY+margin, maxY+margin]]};
}
catch {
  return -1;
}}

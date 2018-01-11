import _ from "lodash";

const spinnerNames = [
  "circle",
  "cube-grid",
  "wave",
  "folding-cube",
  "three-bounce",
  "double-bounce",
  "wandering-cubes",
  "chasing-dots",
  "rotating-plane",
  "pulse",
  "wordpress",
  "ball-grid-beat",
  "ball-grid-pulse",
  "line-spin-fade-loader",
  "ball-spin-fade-loader",
  "ball-pulse-rise",
  "line-scale",
  "line-scale-pulse-out",
  "line-scale-pulse-out-rapid",
  "pacman",
  "line-scale-party",
  "ball-triangle-path",
  "ball-scale-multiple",
  "ball-scale-ripple-multiple",
  "ball-pulse-sync",
  "ball-beat",
  "ball-zig-zag",
  "ball-zig-zag-deflect",
  "ball-clip-rotate-pulse",
  "ball-clip-rotate-multiple",
  "ball-clip-rotate",
  "ball-scale-ripple",
  "triangle-skew-spin"
];

export const getSample = () => {
  return _.sample(spinnerNames);
};

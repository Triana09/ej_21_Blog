const rn = require("random-number");
function randomF(numMin, numMax) {
  const options = {
    min: numMin,
    max: numMax,
    integer: true,
  };
  return rn(options);
}

module.exports = randomF;

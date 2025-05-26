const convertToCelsius = function(tempInFahrenheit) {
  return roundToDecimal((tempInFahrenheit - 32) * (5 / 9), 1);
};

const convertToFahrenheit = function(tempInCelsius) {
  return roundToDecimal(tempInCelsius * (9 / 5) + 32, 1);
};

function roundToDecimal(val, dp) {
  const factor = 10 ** dp;
  return Math.round((val * factor)) / factor;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

export const useTemperatureMeasure = (units, temperature) => {
  switch (units) {
    case "C":
      return Math.round(temperature - 273);
    case "F":
      return Math.round(temperature * 1.8 - 459);
    case "K":
      return Math.round(temperature);
    default:
      return null;
  }
};

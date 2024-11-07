export const API_KEY = "AIzaSyCQetDCWUNsYJlF8fmPIotZ9LQigq-DcUI";

export const value_converter = (value) => {
  if (value >= 100000) {
    return Math.floor(value / 1000000) + "M ";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K ";
  } else {
    return value;
  }
};

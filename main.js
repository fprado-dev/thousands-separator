const thousandsSeparator = (value, separator = ",") => {
  if (value < 0) return "Parameters must be Greater or Equal to 0";
  if (value === "") return "0";

  if (typeof value === "string" || (typeof value === "number" && value > 0)) {
    const valueArray = [...value.toString()];
    const length = valueArray.length; // eslint-disable-line
    if (length < 4) {
      const valueToString = value.toString();
      return valueToString;
    } else if (length >= 4 && length < 7) {
      valueArray.splice(length - 3, 0, separator);
    } else if (length > 7 && length < 10) {
      valueArray.splice(length - 3, 0, separator);
      valueArray.splice(length - 6, 0, separator);
    } else {
      valueArray.splice(length - 3, 0, separator);
      valueArray.splice(length - 6, 0, separator);
      valueArray.splice(length - 9, 0, separator);
    }

    return valueArray.join("");
  }
  return "0";
};

module.exports = thousandsSeparator;

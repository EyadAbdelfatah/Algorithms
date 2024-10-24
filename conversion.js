function ToBinaryConversion(number) {
  let result = "";
  let remainder;
  while (number >= 1) {
    remainder = number % 2;
    number = Math.floor(number / 2);
    if (remainder === 1) {
      result += "1";
    } else {
      result += "0";
    }
  }
  result = result.split("").reverse().join("");
  return result;
}

function toNumberConversion(binary) {
  let result = 0;
  binary = binary.toString().split("").reverse().map(Number);
  for (let i = 0; i < binary.length; i++) {
    result += binary[i] * Math.pow(2, i);
  }
  return result;
}

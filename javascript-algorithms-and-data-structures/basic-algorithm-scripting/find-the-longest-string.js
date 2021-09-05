function findLongestWordLength(str) {
  let newStr = str.split(" ");
  let length = [];
  for (let i = 0; i < newStr.length; i++) {
    length.push(newStr[i].length);
  }
  return Math.max(...length);
}

console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow"
  )
);

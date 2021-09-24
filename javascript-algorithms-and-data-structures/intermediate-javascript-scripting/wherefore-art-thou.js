function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let keys = Object.keys(source);
  console.log(keys);

  return collection.filter((el) => {
    return keys.every((key) => {
      return el.hasOwnProperty(key) && el[key] === source[key];
    });
  });

  return collection.filter((el) => {
    return keys
      .map((key) => {
        return el.hasOwnProperty(key) && el[key] === source[key];
      })
      .reduce((a, b) => a && b);
  });
  // Only change code above this line
  return arr;
}

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);

[{ apple: 1, bat: 2, cookie: 2 }];

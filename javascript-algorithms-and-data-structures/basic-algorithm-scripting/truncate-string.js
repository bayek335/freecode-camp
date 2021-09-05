function truncateString(str, num) {
  return str.slice(0, num).concat(str.length <= num ? "" : "...");
  //   return str.length > num ? str.slice(0, num) + "..." : str;
}

console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);

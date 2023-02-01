const longestChar = (str) => {
  if (typeof str !== "string") return new Error("Invalid Input");
  const inputStr = str
    .split("")
    .filter((char) => !parseInt(char))
    .join("");

  const strMap = {};
  inputStr.split("").forEach((char) => {
    if (char in strMap) {
      strMap[char] += 1;
    } else {
      strMap[char] = 1;
    }
  });
  
  const longestOccuring = Object.keys(strMap).sort(
    (a, b) => strMap[b] - strMap[a]
  )[0];
  return { char: longestOccuring, times: strMap[longestOccuring] };
};

console.log(longestChar("aaBBccDeDfDhD121412222"));

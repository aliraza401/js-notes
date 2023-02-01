const includesStr = (str, subStr) => {
  if (typeof str !== "string" || typeof subStr !== "string")
    return new Error("invalid Input");
  if (subStr.length === 0) return true;
  if (subStr.length > str.length) return false;
  if (str === subStr) return true;

  let currentIndex = 0;
  for (let index = 0; index < str.length; index++) {
    if (currentIndex === subStr.length) return true;
    if (str[index] === subStr[currentIndex]) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
  }
  return false;
};

console.log(includesStr("wakanda", "kund"));

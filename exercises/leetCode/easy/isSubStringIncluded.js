
const getLastIndexChar = (str) => {
  let result;
  if(str.length === 0) result = '';
  else result = str[str.length - 1];
  return result;
}


const isSubStringIncluded = (string, subString) => {
  if (subString.length > string.length) return false;
  if (subString.length === string.length && subString === string) return true;

  let tempStr = subString[0];
  string.split("").forEach((item) => {
    if (subString === tempStr) return true;
    console.log(item, getLastIndexChar(tempStr));
    if (item === getLastIndexChar(tempStr)) {
       console.log(tempStr + item);
      tempStr = tempStr + item;
    } else {
      tempStr = subString[0];
    }
  });
  return false;
};

console.log(isSubStringIncluded("bazar", "ar"));

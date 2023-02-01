// Write a function that can take a string of paragraph from user and returns the top 7 most repetitive words along with their counts ordered by count.
// If there are less than 7 repetitive words then return all words with counts ordered by their counts.

const getWordsCount = (para) => {
  let wordsCount = {};
  para
    .trim()
    .split(" ")
    .map((item) => {
      const word = item.toLowerCase().trim();
      wordsCount[word] = item in wordsCount ? wordsCount[word] + 1 : 1;
    });
  return wordsCount;
};

const sortWordsCount = (wordsCount) => {
  const finalObject = {};
  Object.keys(wordsCount)
    .sort((a, b) => wordsCount[b] - wordsCount[a])
    .map((item) => {
      finalObject[item] = wordsCount[item];
    });
  return finalObject;
};

const conditionallyFilterWordsCount = (finalObject, limit) => {
  if (Object.keys(finalObject).length > limit) {
    const returnData = {};
    let index = 0;
    Object.keys(finalObject).map((item) => {
      if (index < limit) {
        returnData[item] = finalObject[item];
      }
      index++;
    });
    return returnData;
  } else {
    return finalObject;
  }
};

const repeatingWords = (para) => {
  const wordsCount = getWordsCount(para);
  const finalObject = sortWordsCount(wordsCount);
  return conditionallyFilterWordsCount(finalObject, 7);
};

console.log(repeatingWords("MY name is ali and  ali is Ali and ali is ali"));

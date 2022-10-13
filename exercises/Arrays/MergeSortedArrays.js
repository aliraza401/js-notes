/*
    Merge two sorted arrays and keep their order.

    [0,3,4,31]
    [4,6,30]
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * O(n)
 */
const mergeSortedArrayTwo = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2))
    return new Error("Invalid Input");
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const newArray = [];
  let currentIndexArr1 = arr1[0];
  let currentIndexArr2 = arr2[0];
  let indexArrOne = 1;
  let indexArrTwo = 1;

  while (currentIndexArr1 || currentIndexArr2) {
    if (!currentIndexArr2 || currentIndexArr1 < currentIndexArr2) {
      newArray.push(currentIndexArr1);
      currentIndexArr1 = arr1[indexArrOne];
      indexArrOne++;
    } else {
      newArray.push(currentIndexArr2);
      currentIndexArr2 = arr2[indexArrTwo];
      indexArrTwo++;
    }
  }

  return newArray;
};

console.log(
  mergeSortedArrayTwo([4, 6, 30, 50, 550, 1000, 1500, 3000], [0, 31])
);

// ------------------------------------------------------------- //

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 * O(n)
 */
const mergeSortedArray = (arr1, arr2) =>
  arr1.concat(arr2).sort((a, b) => a - b);

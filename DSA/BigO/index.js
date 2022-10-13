/* Good Code:
1. Readable
2. Space Complexity -> Variables, Data Structures, Function Call, Allocations
3. Time Complexity -> Operations, Comparisons, Loopings, Outside Function call
*/

// JS measure code performance:
const findNemo = (arr) => {
  const t0 = performance.now();
  arr.map((item) => item === "nemo" && console.log("FOund IT!"));
  const t1 = performance.now();
  console.log("Per in Mili = ", t1 - t0);
};
const arr = new Array(100000).fill("Nemo");
findNemo(arr); //O(n) - Linear Time

const getFirstStudent = (arr) => console.log(arr[0]);
getFirstStudent(arr); //O(1) - Constant Time

const printAllStudents = (inp1, inp2) => {
  inp1.map((item) => console.log(item));
  inp2.map((item) => console.log(item));
}; //O(n+m) - Different inputs

const logPairs = (boxes) => {
  boxes.forEach((ele1) => {
    boxes.forEach((ele2) => {
      console.log(ele1, ele2);
    });
  });
}; // O(n^2) - Quadratic Time

/* Calculating BigO rules.
1. Always go to Worst case. - O(n/2) => O(n)
2. Remove constants.
3. Different terms for input.
   - Different inputs should have different variables: O(a + b).
   - A and B arrays nested would be: O(a * b)
4. Drop Non Dominants - O(n + n^2) => O(n^2)
*/

/* BigO:
O(1) -> Constant - no loops
O(log N) -> Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
O(n) -> Linear - for loops, while loops through n items
O(n log(n)) -> Log Linear - usually sorting operations
O(n^2) -> Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
O(2^n) -> Exponential - recursive algorithms that solves a problem of size N
O(n!) -> Factorial - you are adding a loop for every element
*/

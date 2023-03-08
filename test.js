// ref vs id

// vdom add and remove

// babel build oprimization

// merge vs buble sort

// remove console.log()

// var a = 5;
// function abc() {
//   a = 55;
//   var b = 10;
// }
// function def() {
//   b = 110;
//   var c = 20;
// }
// abc();
// def();
// console.log(a, b, c);

const obj = {
  a: false,
  b: 0,
  c: 34,
  d: NaN,
  e: "Adasfgsf",
  f: 21345245.245,
};

for (let key in obj) {
  if (obj[key]) {
    console.log(key + " : " + obj[key]);
  }
}

class MyArray {
  #data = {};
  constructor() {
    this.length = 0;
  }

  get() {
    return Object.keys(this.#data).map((e) => this.#data[e]);
  }

  push(item) {
    this.#data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    delete this.#data[this.length - 1];
    this.length--;
    return this.length;
  }

  delete(index) {
    if (index >= this.length) return;
    this.#shiftArray(index);
    this.pop();
  }

  // Private Methods
  #shiftArray(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.#data[i] = this.#data[i + 1];
    }
  }
}

const arr = new MyArray();

arr.push("HI");
arr.push("Hola");
arr.push("Hello");
arr.push("One");
arr.push("Two");
// arr.pop();
arr.delete(10);

console.log(arr.length);
console.log(arr.get());

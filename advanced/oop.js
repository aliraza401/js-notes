
// Constructor Fnunction
function Elf({ name, weapon }) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return `${this.name} ekf attacks with ${this.weapon}`;
}

const sam = new Elf({ name: "Sam", weapon: 'Bow' });
console.log(sam.name);
console.log(sam.attack());

// 
// Factory Function
function createBuilder({ name, salary }) {
  return {
    name,
    salary,
    getSalary() {    // This getSalary function will be available in  every builder obj. consume more memory.
      return `${name} gross slary is ${salary * 1.25}`
    },
  }
}

const Bob = createBuilder({ name: 'Bob the builder', salary: 500 });
console.log(Bob.name);
console.log(Bob.getSalary());

// factory function with Object.create()
const createBuilderFuntionsStore = {
  getSalary() {
    return `${this.name} gross salary is ${this.salary * 1.25}`;
  },
}
function createBuilderTwo({ name, salary }) {
  const elf = Object.create(createBuilderFuntionsStore);
  elf.name = name;
  elf.salary = salary;
  return elf;
}

const Bob2 = createBuilderTwo({ name: 'Bob', salary: 500 });
console.log(Bob2.name);
console.log(Bob2.getSalary());

// 
// Class
class Character {
  constructor({ name, weapon }) {
    this.name = name;
    this.weapon = weapon;
    this.getTitle = () => {  // This method is created every time instance is created.
      return `I am ${this.name}`
    }
  }
}
class Wizard extends Character {
  constructor({ name, weapon, type }) {
    super({ name, weapon });
    this.type = type;
  }
  attack() {  // Shared method for all instances
    return `${this.name} wizard attacks with ${this.weapon}`;
  }
}

const gandaf = new Wizard({ name: 'Ganadf', weapon: 'Sword', type: 'Grey' });
console.log(gandaf);
console.log(gandaf.attack());

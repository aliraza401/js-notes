/* 
  Array
*/

const Zombie = {
  name: "Hania",
  gender: "Female",

  eatBrain: function () {
    console.log("Eat brain", this.name);
  },

};

// console.log([...Zombie]);
const abc = Object.assign({}, Zombie);

abc.eatBrain();

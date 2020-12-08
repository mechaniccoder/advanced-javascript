const animal = {
  eats: true,
  setName() {
    this.name = "seunghwan";
  },
};

const rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.setName();

console.log(animal);
console.log(rabbit);

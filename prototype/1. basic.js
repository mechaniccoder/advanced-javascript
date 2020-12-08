const animal = {
  name: "doggy",
  sayHi() {
    console.log("hello");
  },
};

const rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.sayHi();

class Rabbit {
  static [Symbol.hasInstance](obj) {
    if (obj.isEat) {
      return true;
    }
  }
}

const rabbit = { isEat: true };

console.log(rabbit instanceof Rabbit);

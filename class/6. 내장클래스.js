class Rabbit extends Array {
  isRabbit() {
    return console.log(true);
  }

  static get [Symbol.species]() {
    return Array;
  }
}

const array = new Rabbit(1, 2, 3, 4, 5);

array.isRabbit();

const filteredArray = array.filter((item) => item > 3); // Array가 아닌 array.constructor를 기반으로 객체가 형성됨
filteredArray.isRabbit();

const animal = {
  name: "동물",
  eat() {
    console.log(`${this.name}이 먹이를 먹습니다.`);
  },
};

const rabbit = {
  __proto__: animal,
  name: "rabbit",
  eat() {
    this.__proto__.eat.call(this); // this는 rabbit이 아닌 longEar가 됩니다. 무한 루프에 빠지겠죠?
  },
};

const longEar = {
  __proto__: rabbit,
  eat() {
    this.__proto__.eat.call(this); // rabbit의 eat메서드에 this=longEar로 할당합니다
  },
};

rabbit.eat();

/**
 * [[HomeObject]], super 키워드는 [[HomeObject]]를 기반으로 븀ㅎ 프로토타입과 메서드를 찾습니다.
 */
const animal = {
  name: "동물",
  eat() {
    console.log(`${this.name}이 먹이를 먹습니다.`);
  },
};

const rabbit = {
  __proto__: animal,
  name: "rabbit",
  eat() {
    super.eat();
  },
};

const longEar = {
  __proto__: rabbit,
  eat() {
    super.eat();
  },
};

longEar.eat(); // animal 객체의 eat메서드가 실행될 때 this=longEar가 할당됩니다.

/**
 * 함수 프로퍼티가 아닌 메서드를 사용할 것, 프로퍼티에는 [[HomeObject]]가 없기 때문이죠.
 */

const animal = {
  sayHi: function () {
    console.log("hi");
  },
};

const rabbit = {
  __proto__: animal,
  sayHi: function () {
    super.sayHi();
  },
};

rabbit.sayHi(); //'super' keyword unexpected here

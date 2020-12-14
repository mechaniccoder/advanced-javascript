class Rabbit {
  constructor() {
    this.name = "mia";
    this.age = 10;
  }

  sayHi() {
    console.log("hi");
  }
}

console.log(typeof Rabbit);
console.log(Rabbit.prototype.constructor);
console.log(Rabbit.prototype.sayHi());

// class로 만든 함수에는  [[FunctionKind]]:"classConstructor" 라는 특수 프로퍼티가 있고, 이로 인해 new 키워드와 함께 호출되야만 합니다.

class Rabbit {
  // 클래스 필드 문법, prototype이 아닌 개별 객체에 선언됩니다.
  name = "neo";

  // 생성자 함수 (Rabbit 함수의 함수 본문에 해당합니다.)
  constructor() {
    this.age = 8;
  }

  sayHi() {
    console.log("깡총깡총");
  }
}

const rabbit = new Rabbit();

console.log(rabbit.name);
rabbit.sayHi();

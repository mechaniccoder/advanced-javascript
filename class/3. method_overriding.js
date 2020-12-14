/**
 * 메서드 오버라이딩
 */
class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.speed}로 달립니다.`);
  }

  stop() {
    this.speed = 0;
    console.log("멈춥니다.");
  }
}

/**
 * 생성자 없는 상속받는 클래스
 */

class Rabbit extends Animal {
  // 자체 생성자가 없기 때문에 아래와 같이 자동으로 만들어집니다.
  // constructor(...args) {
  //   super(...args);
  // }

  hide() {
    console.log("hide");
  }
  stop() {
    super.stop(); // 부모클래스의 메서드를 호출하는 방법입니다.
    this.hide();
  }
}

// 상속받는 클래스는 this를 만들어 할당하는 처리를 부모 클래스가 해주기를 바랍니다. 즉, 생성자가 없더라도 부모 클래스가 이를 대신해주죠. 인자도 전달됩니다.
const rabbit = new Rabbit("sang");

rabbit.run(5);
rabbit.stop();

/**
 * 생성자 오버라이딩
 */

class Rabbit extends Animal {
  constructor(name, earLength) {
    // 틀렸습니다. 상속받는 클래스는 this에 빈 객체를 할당하는 작업을 부모클래스가 해주길 원합니다. 따라서 super 키워드를 반드시 호출해야합니다.
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

class Rabbit {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
}

/**
 * 클래스필드 오버라이딩
 * 상속받는 클래스의 필드는 super가 실행되고 나서 초기화됩니다. 메서드는 super 이전에 초기화되기 때문에 우리가 의도한대로 동작하죠.
 */

class Animal {
  name = "animal"; // 1

  constructor() {
    // 2  name = "animal"
    console.log(this.name);
  }
}

class Rabbit {
  name = "rabbit";
  3;
}

const rabbit = new Rabbit();

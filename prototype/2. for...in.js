// for...in문은 prototype의 프로퍼티도 순회대상에 포함합니다.
const animal = {
  eats: true,
};

const rabbit = {
  jumps: true,
  __proto__: animal,
};

console.log(Object.keys(rabbit)); // jump만 반환

for (const property in rabbit) {
  console.log(property); // jumps, eats
}

// prototype의 프로퍼티를 걸러내기 위해서 obj.hasOwnProperty 메서드를 활용합니다.
for (const property in rabbit) {
  if (rabbit.hasOwnProperty(property)) {
    console.log("자신의 프로퍼티:", property);
  } else {
    console.log("상속 프로퍼티:", property);
  }
}

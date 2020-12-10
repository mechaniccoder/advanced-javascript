// Object.create(proto, [descriptor]), Object.getPrototypeOf(obj), Object.setPrototypeOf(obj, proto)

const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
console.log(rabbit.eats); // true

Object.getPrototypeOf(rabbit);
console.log(animal === Object.getPrototypeOf(rabbit)); // true

Object.setPrototypeOf(rabbit, {});
console.log(Object.getPrototypeOf(rabbit));

// Object.create를 활용해 효과적으로 객체를 복사할 수 있습니다.
const target = {
  test1: { name: "seunghwan", age: 27 },
  test2: { name: "sanggyu", age: 25 },
};
const obj = Object.create(
  Object.getPrototypeOf(target),
  Object.getOwnPropertyDescriptors(target)
);

console.log(target);
console.log(obj);

obj.test1.name = "cannot copy deeply";

console.log(target);
console.log(obj);
// 깊은 복사는 안되네요

/**
 * 그런데 왜 __proto__를 사용하는 것이 좋지않을까요? __proto__를 사용해 [[prototype]]을 변경하는 연산은 객체 프로퍼티 접근 최적화를 망칩니다.
 * 따라서 성능이 저하되죠.
 */

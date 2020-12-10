// 아주 단순한 객체는 프로토타입이 null인 객체를 의미합니다. 다음과 같이 만들 수 있습니다.

const obj = {};
obj["__proto__"] = "__proto__";
console.log(obj.__proto__);

const pureObj = Object.create(null); // Pure Object는 상속을 받지 않기 때문에 내장 메서드를 활용할 수 없습니다.
pureObj["__proto__"] = "__proto__";
console.log(pureObj["__proto__"]);

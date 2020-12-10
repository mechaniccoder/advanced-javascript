// native prototype이란 자바스크립트 엔진에 내장되어 있는 생성자 함수의 prototype 프로퍼티를 의미합니다.
// prototype에 프로퍼티를 추가하면 충돌이 일어날 수 있기 때문에 폴리필을 설정할때만 이를 허용합니다.

const obj = {};
console.log(obj.toString()); // Object 생서자 함수의 prototype이 참조하는 Object.prototype에 존재하는 toString() 메서드.

const array = [];
console.log(array.toString()); // Object.prototype보다 array.prototype에 존재하는 toString이 더 가깝습니다.

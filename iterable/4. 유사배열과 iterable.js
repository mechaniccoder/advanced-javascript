/**
 * index와 length 프로퍼티가 있으면 이를 '유사배열' 이라고 합니다.
 * 유사배열과 iterable은 엄연히 다릅니다. 유사배열엔 [Symbol.iterator] 메소드가 정의되어있지 않죠?
 * 그리고 둘 다 배열은 아니기 때문에 배열 메소드를 활용할 수 없습니다. 
 * */ 
const arrayLike = {
    0: 'hello',
    1: 'world', 
    length: 2
}

for (let item of arrayLike) {
    console.log(item); // TypeError: arrayLike is not iterable
}

// 유사배열과 iterable을 배열로 활용하기 위해서는 Array.from을 사용하면 됩니다.
const array = Array.from(arrayLike);
console.log(array); // [ 'hello', 'world' ]
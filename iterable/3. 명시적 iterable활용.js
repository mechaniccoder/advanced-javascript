const str = 'seo';

// iterator객체를 할당해서 조금 더 명시적으로 반복문을 제어할 수도 있습니다.
const iterator = str[Symbol.iterator]();

while(true) {
    let result = iterator.next();
    if (result.done) break;

    console.log(result.value);
}
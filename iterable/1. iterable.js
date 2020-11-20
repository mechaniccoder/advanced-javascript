const range = {
    from: 1,
    to: 5
}


// for ... of가 시작되면 Symbol.iterator를 호출합니다. 
range[Symbol.iterator] = function() {
    // Symbol.iterator는 iterator 객체를 반환하고요. for ... of는 이 iterator객체만을 대상으로 동작합니다.
    return {
        current: this.from,
        last: this.to,

        // for ... of의 반복마다 next가 호출됩니다.
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true}
            }
        }
    }
}

for (num of range) {
    console.log(num);
}

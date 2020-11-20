const range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        // 이렇게 iterator를 자기 자신으로 설정하면 코드가 훨씬 간결해집니다.
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++}
        } else {
            return { done: true }
        }
    }
}

for (num of range) {
    console.log(num);
}


const range = {
  from: 1,
  to: 5,

  async *[Symbol.iterator]() {
    for (let i = this.from; i <= this.to; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      yield i;
    }
  },
};

for (let value of range) {
  console.log(value);
}

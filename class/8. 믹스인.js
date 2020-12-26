const sayHiMixin = {
  sayHi() {
    console.log("hi");
  },
  sayBye() {
    console.log("bye");
  },
};

const sayMixin = {
  __proto__: sayHiMixin,
  say() {
    super.sayHi();
    super.sayBye();
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayMixin);

new User("seung").say();

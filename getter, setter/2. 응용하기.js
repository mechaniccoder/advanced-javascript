const user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      return console.log("Too short");
    }

    this._name = value; // 이때 동적으로 _name이라는 프로퍼티가 생성됩니다.
  },
};

console.log(Object.getOwnPropertyDescriptor(user, "_name"));
user.name = "wefwef";
console.log(Object.getOwnPropertyDescriptor(user, "_name"));

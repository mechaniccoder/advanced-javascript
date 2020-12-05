const user = {
  name: "seunghwan",
  surname: "yu",

  get fullName() {
    return `${this.surname + this.name}`;
  },

  set fullName(value) {
    [this.surname, this.name] = value.split(" ");
  },
};

console.log(Object.getOwnPropertyDescriptor(user, "fullName"));

/**
 * getter, setter를 사용하면 fullName이라는 가상의 프로퍼티가 생기지만 실제로는 존재하지 않습니다.
 * getter, setter에 의해 처리될 뿐이죠.
 * 그래서 접근자 프로퍼티에는 writeable, value가 없습니다. 그에 대응하는 setter, getter가 있죠.
 *
 */

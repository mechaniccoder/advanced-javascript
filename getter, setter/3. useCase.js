function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  Object.defineProperty(this, "age", {
    get() {
      const todayYear = new Date().getFullYear();
      return todayYear - birthday.getFullYear();
    },
  });
}

const user = new User("seunghwan", new Date(1994, 9, 15));
console.log(user.age);

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  callMyProfile() {
    console.log(this.name, this.age);
  }
}

const Nakanishi = new Human("Nakanishi", 30);
// console.log(Nakanishi);
Nakanishi.callMyProfile();

const Tanaka = new Human("Tanaka", 40);
// console.log(Tanaka);
Tanaka.callMyProfile();

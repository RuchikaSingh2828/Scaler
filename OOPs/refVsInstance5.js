class Student {
  constructor(name = '', age = 0) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  sayHello(name) {
    console.log(`${this.name} says hello to ${name}`);
  }
}

function swap(s1, s2) {
  const temp = s1;
  s1 = s2;
  s2 = temp;
}

const s1 = new Student('A', 10);
const s2 = new Student('B', 20);

swap(s1, s2);
s1.display();
s2.display();

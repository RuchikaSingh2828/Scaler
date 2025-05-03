class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
  static sayGoodbye() {
    console.log('Goodbye!');
  }
}

let student1 = new Student('A', 10);
let student2 = new Student();

let temp = student1;
student1 = student2;
student2 = temp;

student2.display();
student1.display();
student1.sayHello();

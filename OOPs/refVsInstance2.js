class Student {
  constructor(name, age) {
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

let student1 = new Student('A', 10);
let student2 = new Student();

let tempAge = student1.age;
student1.age = student2.age;
student2.age = tempAge;

student2.display();
student1.display();

student1.sayHello(student2.name);
student2.sayHello(student1.name);

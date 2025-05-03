class Student {
  constructor() {
    this.age = 0;
    this.name = null;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

let student1 = new Student();
student1.age = 10;

const s2 = student1;
s2.display();

class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
  speak() {
    console.log(`i am ${this.name}, i like speaking`);
  }
}
export default Person;

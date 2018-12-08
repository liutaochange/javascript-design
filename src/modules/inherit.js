import Person from './Object-oriented'
class Student extends Person {
  constructor (name, age, job) {
    super(name)
    this.age = age
    this.job = job
  }
  getJob () {
    console.log(this.job)
  }
  getAge () {
    console.log(this.age)
  }
}
export default Student

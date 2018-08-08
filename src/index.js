class Person {
  constructor (name) {
    this.name = name
  }
  getName () {
    return this.name
  }
}

let web = new Person('yoo')
console.log(web.getName())

class Person {
  // 默认是public
  public name
  public age
  // 受保护的属性，只有自己和子类可以访问
  protected weight
  constructor(name, age, weight) {
    this.name = name
    this.age = age
    this.weight = weight
  }

  getName() {
    alert(`my name is ${this.name}`)
  }

  getWeight() {
    alert(`my weight is ${this.weight}`)
  }
}

class Java extends Person {
  number 
  // 只是自己私有的属性
  private girl
  constructor(name, age, number, girl){
    super(name, age, 18)
    this.number = number
    this.girl = girl
  }
  getNumber() {
    alert(`my name is ${this.number}`)
  }

  getWeight() {
    alert(`my weight is ${this.weight}`)
  }

  getGirl() {
    alert(`my girl is ${this.girl}`)
  }
}

let xiaoming = new Java('java', 18, '0001', 'lili')
xiaoming.getWeight()
xiaoming.getGirl()
// 属性“weight”受保护，只能在类“Person”及其子类中访问
// alert(xiaoming.weight) // Property 'weight' is protected and only accessible within class 'Person' and its subclasses.
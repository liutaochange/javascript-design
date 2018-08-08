import Person from './modules/Object-oriented'
import Student from './modules/inherit'
let web = new Person('yoo')
web.getName()

let java = new Person('goo')
java.speak()

let zhang = new Student('foo', 20, 'web')
zhang.getName()
zhang.getJob()

let wang = new Student('woo', 30, 'java')
wang.getAge()
wang.getName()

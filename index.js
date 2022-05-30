// console.log("Hello From Node.js............")
// const person = require('./person')
// console.log(person.name)

// THIS METHOD IS CALLED COMMON JS
// const Person = require('./person')
// const person1 = new Person("Johnson", 30)
// person1.greeting()

const Logger = require('./logger');
const logger = new Logger();
logger.on('Message', data=>console.log('Called Listener', data))
logger.log("Hello World");
logger.log("Hi ");
logger.log("Hello ")
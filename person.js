// Module wrapper Function
// (function(exports, require,__filename,__dirname){
    
// })
// console.log(__dirname, __filename)

// // EXPORTING AN OBJECT
// const person={
// name:"Johnson",
// age:30
// }
// module.exports=person;

//EXPORTING CLASS
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age} `)
    }
}

module.exports=Person

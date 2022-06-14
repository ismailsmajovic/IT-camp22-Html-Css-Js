const person ={
    name:'jphn',
    age: 22,

}

function sayHelo(){
    console.log(`helo ${this.name}`)
}
sayHelo.call(person)
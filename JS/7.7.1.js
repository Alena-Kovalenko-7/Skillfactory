class Person { 
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}
    function printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    const personAlena = new Person("Alena", 34);
    printInfo.call(personAlena);

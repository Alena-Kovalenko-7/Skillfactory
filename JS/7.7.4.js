const person = {
    name: "John Smith"
};

function setFullName(obj, name) {
    obj.fullName = name;
  }

const setPersonFullName = setFullName.bind(null, person);
setPersonFullName("John Smith");

console.log(person.fullName);

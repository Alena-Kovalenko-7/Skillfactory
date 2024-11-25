const users = [
    { name: "Alena", age: 18 },
    { name: "Ivan", age: 25 },
    { name: "Viktoria", age: 15 },
    { name: "Anton", age: 20 }
];

const filterUsersAge = users.filter((user) => user.age >=18);
console.log(filterUsersAge);

const filterUsersName = users.map((user) => user.name);
console.log(filterUsersName);



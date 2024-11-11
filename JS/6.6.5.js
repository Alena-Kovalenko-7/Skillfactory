// Задание 6.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
const arrValues = [];

for (const [key, prop] of Object.entries(obj)) {
    if (Array.isArray(prop)){
        for (let value of prop) {
            arrValues.push(value)   
        }
    } else {
        arrValues.push(prop);
    }
  }
  console.log(arrValues);
function calculate(a, b, operator) {
    if (this.a != undefined) {
        a = this.a;
        b = this.b;
        operator = this.operator;
    }
    switch(operator) {
        case "+": 
            return a + b;                  
        case "-": 
            return a - b;                
        case "*": 
            return a * b;             
        case "/": 
            if (b === 0) {
                alert("На ноль делить нельзя! Введите другое число b.");
                return;
            }
            return a / b;                
        default:
            alert("Введите корректный оператор!");         
    }  
} 

class Operation { 
    constructor(a, b, operator) {
        this.a = a;
        this.b = b;
        this.operator = operator;

    }
}
const operationDivision = new Operation (1, 2, "/")
console.log(calculate.apply(operationDivision));
console.log(calculate.apply(null, [2, 3, "+"]));
function calculator(operation) {
    return function(a, b) {
        if (operation === "add") {
            return a + b;
        } else if (operation === "subtract") {
            return a - b;
        } else if (operation === "multiply") {
            return a * b;
        }
    };
}
const add = calculator("add");
const subtract = calculator("subtract");
const multiply = calculator("multiply");

console.log(add(5, 3));        
console.log(subtract(10, 4)); 
console.log(multiply(6, 7)); 
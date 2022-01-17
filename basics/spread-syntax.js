/*Spread syntax (...) allows an iterable such as an array expression or string to be expanded
in places where zero or more arguments (for function calls) or elements (for array literals)
are expected, or an object expression to be expanded in places where zero or more key-value pairs
(for object literals) are expected.*/

function sum (x, y, z){
    return x + y + z
}

const arr = [1, 2, 3]

console.log(sum(...arr))


function sumMore(w, x, y, z){
    return w + x + y + z
}

console.log(sumMore(...arr, 5))
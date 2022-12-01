/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    return a + b;
}

x = 53455;
y = 43545;

let sum = addTwoNumbers(x,y);
console.log("the result of adding ",x ," and ", y ," is ", sum);

// Arrow Function With Parameters
const  addTwoNumberz = (a, b) => {
    a = a + b;
    return a + b;
}

x = 5345;
y = 4355;

sum = addTwoNumberz(x,y);
console.log("the result of adding ",x ," and ", y ,"with an arrow function is ", sum);

// Single Line Arrow Function With Parameters
// Arrow Function With Parameters
const  addTwoNumberzOneLine = (a, b) => a + b + b;

x = 534;
y = 435;

sum = addTwoNumberzOneLine(x,y);
console.log("the result of adding ",x ," and ", y ,"with one line is ", sum);


// Implicit Returns

// Returning Multiple Lines
// Arrow Function With Parameters
const  addTwoNumberztext = (a, b) => (
`<p> ` + a +
    ` This is some text in a multiline string ` + b +
` </p>`)


let p="we";
let q="you";

result = addTwoNumberztext("we","you");
console.log("the result of the function for",p ," and ", q ,"with one line is ", result); 
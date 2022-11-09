/*Arrow functions in Javascript | JavaScript Tutorial In Hindi #41
In this tutorial, we will learn about how to use the JavaScript arrow function to write more concise code for function expressions. Before learning about arrow function expressions, first, let us briefly review traditional JavaScript functions in order to better show the difference of arrow functions from traditional JavaScript functions.

As we have studied in the previous tutorial, the function is a group of reusable code which can be called anywhere in the program. This eliminates the need to rewrite the same code. The function declaration is a named function written with the function keyword. To get more detailed knowledge about functions, check the tutorial#10. 

 Here is an example of a multiply function that returns the product of two parameters:

function mul(a, b) {
return a * b
}//calling function
mul(3,3) //returns 9

 
What are Arrow Functions? 
One of the most famous features in modern JavaScript is the arrow function.ES6 arrow functions provide us an alternative way to write a more concise and shorter syntax compared to the traditional function expression. Here is an syntax of arrow functions:

let myfunc = (arg1, arg2, ...argN) => expression

Let’s see another example of traditional function expression that adds two numbers:

let addition = function(x,y) {
 return x + y;
}
console.log(addition(10,10)); // returns 20
Now lets see an example of arrow function which is equivalent to the above addition() function expression:

let addition = (x,y) => x + y;
console.log(addition(10,10)); // 20;
In the above example, the arrow function has only one expression x + y so it returns the result of the expression (10+10=20).

Here is an another example of arrow functions that will print “ Hello World”:

greet = () => {
   return "Hello World!";
 } 
If the function has one statement, and the statement returns a value or string, we can remove the brackets and the return keyword:

greet = () => "Hello World!";
Limitations of Arrow Functions:-
An arrow function expression is an alternative to a traditional function expression, but there are some limitations: 

Arrow functions do not have its own bindings to this or super, and should not be used as methods.
It is not suitable for the call, apply and bind methods, which generally rely on establishing a scope.
Arrow functions cannot be used as constructors.
Arrow functions are a powerful addition to ES6, but we have to be careful while using them. There are some places where arrow functions are not usable, and this can cause difficulty for us to track errors, especially if we do not understand how they really work. Arrow functions are the best choice when working with closures or callbacks, but it is not a good choice when working with object methods or constructors.


 
Summary:-
Arrow functions are handy for one-liners. They come in two flavors:

Without curly braces: (...args) => expression, where at the right side is an expression. The function evaluates the expression and returns the result.
With curly braces: (...args) => { body }, the brackets allow us to write multiple statements inside the function, but in such scenario, we need an explicit return to return something. */

console.log('School harami')


// ARROW FUNCTIONS

// Creating a regular function
// function anant() {
//     document.write('I AM THE BEST CODER, CO-CO-DER,CO-CO-CO-CODER')
// }
// anant(); // NAHI DEKH PA RAHA TO SABSE NICHE DEKH YAHA PE HAI BORDER SE CHIPAK KE

// Converting it to an arrow function
// const anant2 = ()=>{
//     console.log("This is the best person ever")
// }
// anant2();

// function returning something
// const greet = function(){
//     return "Good Morning";
// }

// One liners do not require braces/return
// one line will automatically return
// const greet = () =>  "Good Morning";

// const greet = () =>  ({name: "harry"});

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name;
console.log(greet('Confused coder'))


console.log('tut3');
// Variables in js
// var, let, const

// var : Before the advent of ES6, var declarations were used to declare a variable. The properties of var is that it has visibility linked to the function to which it belongs. We can change its value, and it can be redeclared in the same scope. Scope means where these variables are available for use. There are two types of scope, local and global. Var declarations are globally scoped, and when they are defined inside a function, they are locally scoped.
var name = 'harry';
var channel;
var marks = 3454;
marks = 0;
channel = 'CodeWithHarry'
console.log(name, channel, marks);
// Rules for creating JavaScript Variables
/*
1. Cannot start with numbers
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

// Const is introduced in ES6. It is a variable type assigned to data whose value cannot and will not be changed throughout the program. Const is more strict as compared to var and let. Const is also limited to the scope in which it operates. We declare const just like var and let. We use const when we are sure a variable will not be redeclared. The characteristic of const and their declarations are block-scoped, and they cannot be updated or redeclared.
const ownersName = 'Hari Ram';
// ownersName = 'Harry'; // Cannot do this (error)
console.log(ownersName);
const fruit = 'Orange';

// The variable type let is introduced in ES6. It shares a lot of similarities with var, but unlike var, it has scope constraints. Its declaration and assignment are similar to var. The purpose of introducing let is to resolve all issues posed by variables scope, which developers face during development. The properties of let are that They have visibility linked to the block they belong with. We can change their values, but they cannot be redeclared in the same scope, unlike var.                   

// "let" helps us by making it easier to see where variables live in our code and make our code cleaner and easier to read.

{
 let city = 'Rampur';   
 city = 'Kolkata';
 console.log(city);
}
console.log(city);


const arr1 = [12,23,12,53, 3];
// arr1.push(45);
console.log(arr1)

/* Most common programming case types:

1. camelCase  // we use this
2. kebab-case
3. snake_case 
4. PascalCase 


*/

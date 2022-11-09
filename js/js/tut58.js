/*JavaScript Sets | JavaScript Tutorial In Hindi #58
In today’s tutorial, we will discuss another advance topic of JavaScipt. With the introduction of ECMAScript 6, came the introduction of a new built-in JavaScript object type: the Set. So, let's start learning about this new concept.


 
What is set in JavaScript?
A set is a collection of unique items. In set, no element can be repeated. The set in ES6 are ordered, elements of the set can be iterated in the insertion order. The power of the set is that it can store any types of values, whether primitive or objects.

Syntax:

let myset=new Set([iterable]);
In the syntax, iterable is an object whose all elements are added to the new set created. In set, the parameter is optional. If the parameter is not specified or null is passed then a new set created is empty. It returns a new set object.

Methods of the set:-
add(): This method adds the new element with a specified value at the end of the Set object. Here is the syntax:

set1.add(x);
Here “x” is a value to be added to the set. And its returns set object.

delete(): This method deletes an element with the specified value from the Set object. Here is the syntax:

set1.delete(x);
Here “x” is a value to be deleted from the set. This method returns true if the value is successfully deleted from the set else returns false.

clear(): This method removes all the element from the set. Here is the syntax:

set1.clear();
In this method, no parameter is needed, and it returns undefined.

entries(): This method returns an iterator object which contains an array having the entries of the set, in the insertion order. Here is the syntax:

set1.entries();
This method does not need any parameter. It returns an iterator object that contains an array of [value, value] for every element of the set, in the insertion order. 


 
has(): This method returns true if the specified value is present in the Set object. Here is the syntax:

set1.has(x);
Here “x” is the value to be searched in the Set. This method returns true if the value is present else it returns false.

values(): This method returns all the values from the Set in the same insertion order. Here is the syntax:

set1.values();
No parameters are needed in this method. An iterator object is returned that contains all the values of the set in the same order as they are inserted. 

keys() – This method returns all the values from the Set in the insertion order. keys() is similar to the values() in case of Sets. Here is the syntax:

set1.keys();
No parameters are needed in this method. An iterator object returned that contains all the values of the set in the same order as they are inserted. 

Example:-
Suppose have students coming, and we like to remember everyone. But repeated students should not lead to duplicates. A student must be “counted” only once. For this, we will use set.

let set = new Set();
let john = { name: "John" };
let harry = { name: "harry" };
let cavin = { name: "cavin" };
//  some users come multiple times
set.add(john);
set.add(harry);
set.add(cavin);
set.add(john);
set.add(harry);
// set keeps only unique values
for (let user of set) {
console.log(user.name)}*/

var cog = console.log 
cog(`#CHINDIBHAI`);

let mySet = new Set();
cog('Old set look like', mySet)
mySet.add(`This`)
mySet.add(`This`) // function say- ae dunia me taraha taraha ke log hai tum log ek hi jagaha pe ek hi cheez nahi rakh sakte chahe dunia khatam hi kyo na ho jae
mySet.add(`myname`)
mySet.add(`that`)
mySet.add(34)
mySet.add(true)
mySet.add(false)
mySet.add(`That2`)
cog(`New set look like`, mySet)

// let mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']); // shoutu baba ka shorcut
// cog(`New set:`,mySet2); 

cog(`The size of mySet is: ${mySet.size}`) //  aukat ki bat karega size dekh apna -> isse aajaega samaj

cog(`dusara code - mere pass function hai, array hai tere pass kya hai
mySet - mere pass, abhi (has) function se dekhta -> `)
n = `This`
let merepass = mySet.has(n)
if (merepass == true) {
    cog(`Mere pass [${n}] hai`)
} 
else{
    cog(`Abe oo chapadganju sahi value dal`)
}

let j = `That2`;
cog(`Controle panel: Hame apne sutro se ek cheez pata challa hai ki ek ${j} nam ka admi setdhrow pe utar aaya hai, kripaya usse set se hata de
Anant: ok 
`);
mySet.delete(j);
cog(mySet);

let z = Array.from(mySet)
cog(z)
// bhai eska ye matlab hai ki suppose kar ki kisi ne tujhe diya 200-300 ka array ab usme se 130 word hai or baki sabh usme ke hi copy hai or tujhe un sabh ko chatna hai, isme bhhot mhata pachhi lagagi.  par agar tu Array.from(mySet) use kare to bas 2 sec ke ander ans or vapis array ke ander convert karke de dedega tu



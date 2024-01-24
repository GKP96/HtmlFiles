console.log("Cookie")

//  CodeWithHarry
// var - can be updated and redeclared  #function scoped or global scoped.
// let - can be updated and can't redeclared #block level scope
// const - can't be updated and redeclared



// 7 Premitive data types: NN BB SS U 
/*
---------- datatypes in JavaScript -----------
           *Number
           *String
           *Symbol
           *Boolean
           *BigInt
           *undefined 
           *null
*/

//1.null
let z= null;
console.log(a)

//2.number
let b = 15;
console.log(b)
console.log(typeof b)

//3.Boolean
let c = true;
console.log(c)

//4.BigInt
let d = BigInt("5148")
console.log(d)
console.log(typeof d)

//5.String
let e = "Gaupra"
console.log(e)

//6.symbol
let f = Symbol("Living the best life.")
console.log(f)
console.log(typeof f)

//7.undefined
let g = undefined
console.log(g)

let h
console.log(h)



//Non-premitive datatypes : Objects 
const item = {
    "Ivaan":true,
    "Ira":78,
    "Diya":false,
    "Shriya":undefined
}
console.log(item["Ira"])
console.log(item.Ira) // 2nd way to access key


//Q.Create a variable of a type string and try to add a no. to it
let p = "nini"
let q = 5
console.log(p + q)

//type of Q.1
console.log(typeof (p + q))

//Q. Try to add a new key to cnst object 
const a1 = {
    name:"Sia",
    section:"1",
    isprincipal: false
}

//a1 = 5           can't add new object like string or a number
//a1 = "diya"      can't add new object(string)

a1['name'] = "Rhiya"   //can update 
a1['friend'] = "Darji" //can add another key(key value pair)
console.log(a1)


//========================   Operators in JS   ===========================
//Arithmatic operators : +, -, /, *, %(modulus: gives remainder), **(exp), 
//                       ++(increment oprator), --(decrement operator)
let m = 17
let n = 4

console.log(m**n)  //17^4
console.log(m%n)   //remainder 1 (17/4)
console.log(n)
console.log(n++)   //print 1st then add
console.log(n);
//console.log(m--) 

console.log(typeof a);
console.log(type);



//*************   Comparison operator   ****************
let comp1 = 5;
let comp2 = '5';  //string
console.log(comp1 == comp2)   //true (taking both as number)
console.log(comp1 === comp2)  //false coz 'number' and 'string' are not equal.
console.log(comp1 != comp2)
console.log(comp1 !== comp2) 


let A1= 5;
let A2 = 6;
console.log(A1<A2 && A1==5)  //T && T = T (rest are F in &&)
console.log(A1>A2 || A1==5)  //F or T = T (any one is T then T, if both F then F)


// #7*******************  Conditional Expressions ****************
let age = prompt("Hey what's your age?");
age = number.parseInt(age);
if(age>0){
    alert("This is a valid age")
}
else{
    alert("This is an invalid age")
}


//   ***************   Ternary Operator   ********************
const marks = 6;
console.log(marks>=5? "pass" : "fail")


// #8 practice on operators and conditionals+6
//Q.1 use logical op to chk age is lies betn 10 to 20?
let ag = 23
if(ag>10 && ag<20){
    console.log('Your age lies between 10 to 20')
}
else{
    console.log('Your age does not lies between 10 to 20')
}

//Q.2 demonstrate the use of switch case statement
const pet = "cat";
    switch (pet){
        case "lizard":
            console.log("I own a lizard");
            break;
        case "dog":
            console.log("I own a dog");
            break;
        case "cat":
            console.log("I own a cat");
            break;
        case "rabbit":
            console.log("I own a rabbit");
            break;
        case "parrot":
            console.log("I own a parrot");
            break;
}

//Q.3 Find whether a number is divisible by 2 and 3
let num = 6;
if(num % 2 == 0 && num % 3 == 0){
    console.log("Your number is divisible by 2 and 3");
}
else{
    console.log("Your number is not divisible by 2 and 3")
}

//Q.4 Find whether a number is divisible by either 2 and 3
let numb = 8;
if(numb % 2 === 0 || numb % 3 === 0){
    console.log("Your number is divisible by either 2 or 3");
}
else{
    console.log("Your number is not divisible by either 2 or 3")
}


let Num = 9;
if(Num % 2 == 0 && Num % 3 == 0){
    console.log("Your number is divisible by 2 and 3");
}
else if(Num % 2 == 0 ){
    console.log("Your number is divisible by 2 but not by 3");
}
else if(Num % 3 == 0 ){
    console.log("Your number is divisible by 3 but not by 2");
}
else{
    console.log("Your number is not divisible by either 2 or 3");
}

//Q.5 use ternary operator write "you can drive" or "you can not drive" age being greater than 18
let Age = 17
console.log(Age>18? "You can drive" : "You can not drive")

let AGE = 23
let xy = AGE>18? "You can drive" : "You can not drive"
console.log(xy)



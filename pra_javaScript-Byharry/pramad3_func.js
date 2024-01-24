/* ***************************************** Functions ****************************************
-are use to seperate the logics 
-also useful whr we need the thing repetatively */


function Avg(x, y){
    return (x+y)/2
}

let a = 1;
let b = 2;
let c = 3;
console.log('Average of a and b:', Avg(a, b))
console.log('Average of B and c:', Avg(b, c))
console.log('Average of a and c:', Avg(a, c))


//
const sum = (a, b)=>{
    return a+b;
}
let y = sum(1,2)
console.log(y);   


//
function greet(name) {
    console.log('Hello, ' + name + '!');
  }
// Arrow function:
//  const greet = (name) => {
//     console.log(`Hello, ${name}!`);
//   };

    // Using the function
greet('Alice');
greet('Bob');
greet('Charlie');







// xxxxxxxxxxxxxxxxxxxxxxx #12  Practice with loops and function xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Q. Print the marks of a student in an object using for loop    obj = {nini:87,  rohan:56, aakash:73}
let marks = {
    suresh: 55,
    leela:65,
    ramesh:72,
}
for(let i = 0; i< Object.keys(marks).length; i++){
    console.log('The marks of ' + Object.keys(marks)[i] + ' are ' + marks[Object.keys(marks)[i]])
}

//Q.2 for in loop
for(let key in marks){
    console.log('The marks of ' + key + ' are ' + marks[key] )
}

//Q.3 wap to print 'try again' untill user enters the correct number
cn = 4  
let i;
while (i != cn){
    console.log("Try again")
    i = prompt('Enter a correct number')
}
console.log("You have entered a correct number");

// wa function to find mean of 5 numbers
const MeanOfNum = (a, b, c, d, e)=>{
    return (a+b+c+d+e)/5
}
console.log(MeanOfNum(5,4,3,2,1))


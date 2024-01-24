//  #9 *************  Loops *****************

// ---------1.For loop -----------
let i = 0;// declared as a globar variable -> means it is acessible globally.

for( i = 0; i<5; i++){
    console.log(i)
}

//Q. Add first n natural numbers 
let sum = 0
let n = 10
for(i = 0; i<n; i++){
    sum += (i+1)
}
console.log("sum of first n natural num:" + sum)


// Program for a factorial number
num = 5;
if(num < 0){
    console.log("Factoials not defined for negative numbers");
}
else{
    let factorial = 1;
    for(i = 2; i<=num; i++){
        factorial *= i; 
    }   
    console.log(factorial);
}

// ---------2.For in loop -----------
let marks = {
    pra:80,
    cookie : 82,
    gau :85,
    dia:75,
    ashu:65
}
for(let a in marks){
    console.log('Marks of ' + a + ' is ' + marks[a])
}


let person = {
    name: 'John',
    age: 30,
    occupation: 'Engineer'
  };
  
//   for (let a in person) {       // to print values only
//     console.log(person[a]);
//   }

//   for (let j in person) {    //to print keyy and values
//     console.log(j + ': ' + person[j]);
//   }
console.log(person);
  

//   ------------ 3.for of loop  --------------
let message = 'Hello';
for (let a of message) {
  console.log(a);
}




// #10. *******************************************   While Loop ***********************************
let a = 10
while(i<a){
    console.log(i);
    i++;
}


// #10. *******************************************  do While Loop ***********************************
let b = 10;
do{
    console.log(i);
    i++;
}
while(i<b)


//
let c = 3;
do{
    console.log(i); 
    i++;
}
while(i<c)



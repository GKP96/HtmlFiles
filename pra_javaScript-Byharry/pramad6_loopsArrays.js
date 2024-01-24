//  #19 **********Loops with Arrays ****************

// for loop
let num = [1, 5, 7, 10, 15, 25, 90]
for(let i = 0; i<num.length; i++){
    console.log(num[i])
}

//forEach loop
// calls a func once for each elts
num.forEach (i) => {
    console.log(i*i);
}


//Array.from:
//make array from given obj or array
//to convrt HTML collections in array while making websites
let name = "Gautam"
console.log(Array.from(name));  //[ 'G', 'a', 'u', 't', 'a', 'm' ]


//for...of:-
//shortcut of for loop
for(let i of num){
    console.log(i);
}
// // for loop
// for(let i = 0; i<num.length; i++){
//     console.log(num[i])
// }



//for...in
//returns array elements
for(let i in num){
    console.log(num[i]);
}
// //returns keys in object (indexes in array) 
// for(let i in num){
//     console.log(i); // 0 to 6 indexes
// }




// #20 ************   map(), filter(), reduce()  *****************
//Array map() method:
//return new array by performing some operation in each elt of array
let array = [2, 25, 7, 0, 77]

let a = array.map((value, index, array) =>{
    console.log(value, index, array);
    return value + index
})
console.log(a);  //2 0 [ 2, 25, 7, 0, 77 ]
                 //25 1 [ 2, 25, 7, 0, 77 ]
                 // 7 2 [ 2, 25, 7, 0, 77 ]
                 // 0 3 [ 2, 25, 7, 0, 77 ]
                 //77 4 [ 2, 25, 7, 0, 77 ]
            //[ 2, 26, 9, 3, 81 ]




//Array filter() method:-
//return array
let b = array.filter((a)=>{
    return a<10
})
console.log(b); //[2, 7, 0]


// Array reduce() method:-
//return a value
let c = array.reduce((a1, a2)=>{
    return a1 + a2
})
console.log(c);  // [(((a1+a2)+a3)+a4)+a5] = 111

//Function ek variable ki trh banaya ja skta hai js me 
const reduce_func = (a1, a2)=>{
    return a1 + a2
}
let d = array.reduce(reduce_func)
console.log(d);


// #21 -------------------- practice on Arrays   ------------------------
// Q. create an arrays of numbers and take input from users to add numbers to this array
// i,e we have to use push
let arr = [1, 2, 3, 4, 5, 8 ,7, 9, 6]
let p = prompt("Enter a number") //45
p = Number.parseInt(p)
arr.push(p)
console.log(arr)   //[1, 2, 3, 4, 5, 8 ,7, 9, 6, 45]

//Q.2 keep adding no,s to the array in Q.1 until 0 is added to the array
// let arr = [1, 2, 3, 4, 5, 8 ,7, 9, 6]
let q;
do{
    q = prompt("Enter a number") 
    q = Number.parseInt(q)
    arr.push(q)
    console.log(arr)
} while (q!=0);
console.log(arr)

//Q. filter for numbers divisible by 2 from a given array 
// ==>here we have to use filter method
let ar = [80, 50, 45, 89, 70, 33,20, 56]
let n = ar.filter((x)=>{
    return x%10 == 0
})
console.log(n);

//Q. create array of square of given numbers
// ==> we have to use map() method here 
let arrayy = [12, 17, 13, 11, 15, 7, 10]
let z = arrayy.map((x)=>{
    return x*x
})
console.log(z);


// Q. use reduce to calculate factorial of given no. from an array of first n natural numbers (n being the no whr factorial needs to be calculated)
let arrr = [1,2,3,4]
let o = arrr.reduce((x1, x2)=>{
    return x1*x2
})
console.log(o);

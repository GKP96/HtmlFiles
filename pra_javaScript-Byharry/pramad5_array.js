//  **************** #16  Arrays   *****************
let marks = [92, 65, 85, 67]
console.log(marks);
console.log(marks[1]);
console.log(marks.length);

marks[1]=75 //can update
console.log(marks);

marks[4]= 45 // adding new value to the array
console.log(marks);
console.log(marks.length);

console.log(typeof marks);  // type of array is Object

// Use a for loop to print array elements
for (let i=0; i< marks.length; i++){
  console.log(marks[i]);
}



let family = ["Cookie", "Princess", "Prajakta", "Gautam", "LOVE"];
// Use a for loop to print array elements
for (let i = 0; i < family.length; i++) {
  console.log(family[i]);
}




// ****************** #17 array methods  *********************
//  array methods
let num = [90, 278, 39, 44, 589, 8]
console.log(num);
console.log(typeof num);   // obj

let a = num.toString()     //a is now a String
console.log(a, typeof a);

let b = num.join('and')  
console.log(b, typeof b);

let c = num.pop()       //removes the last element
console.log(c);
console.log(num, c);   //returns the popped element

let d = num.push(100)   //add the element at the end in array
console.log(num, d);   //returns the new array "length"

let e = num.shift()   //removes 1st element and returns it 
console.log(e);      //returns the popped out element
console.log(num, e);  //returns pooped out element 'after array'
console.log(e, num);  //returns pooped out element 'before array'
//this method modify the original array 

let f = num.unshift(88)  //add the elt & return the new array "length"
console.log(f, num);

//delete is an operator 
delete num[0]
console.log(num);         //6 array length
console.log(num.length);  // 6, array length remains same 

//concatinate
let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]
console.log(a1.concat(a2,a3)); //returns new array, does not change existing array

//Sort
//modify original array
console.log(num.sort());  //here num are getting sort alphabetically; [ 278, 39, 44, 589, 8, 90 ]

//if you want sort the array in ascending order; need to use compare function  
// let num = [90, 278, 39, 44, 589, 8]                      
let compare = (a, b)=>{
  return a-b             // ascending order
}
num.sort(compare)
console.log(num);


// let compare = (a, b)=>{
//   return b-a             // descending order
// }
// num.sort(compare)
// console.log(num);

console.log(num); //array after sorting
num.reverse()
console.log(num); //reversing this array(not original one)



//Splice and slice
// splice('starting index', 'no. of elts remove', no. to add, no. to add)

// num.splice(2, 2, 30, 40)
// console.log(num);  //[ 90, 278, 30, 40, 589, 8 ]

// let num = [90, 278, 39, 44, 589, 8]
num.splice(2, 2, 30, 40, 50, 1, 2, 3, 0)
console.log(num);

let deletedValues = num.splice(2, 2, 30, 40, 50, 1, 2, 3, 0)
console.log(num);
console.log(deletedValues); // [39, 44]

// slice
//slice out piece from an array
// let num = [90, 278, 39, 44, 589, 8]
console.log(num);
console.log(num.slice(2)); // from index 2 to the end 
console.log(num.slice(2,4)); // from index 2 to 4 (i.e index 2 and 3 only)



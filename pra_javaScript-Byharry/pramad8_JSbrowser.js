// #24************* JS in the browser  *********************
/*Developer Tools: 
Elements- all HTML elts
Console- all errors + logs
Network- all network requests
*/

//*********** JavaScript tag ***************


// #25 ************* JS console object ******************
//log is one of the object and more

/////// In console
console.log(console)     //you will see all the methods

console.clear()  //to clear the all console data

//assretion
//show error when assertion failed
console.assert(5<55) // false; will show error
//if true; it will show undefined

console.assert()

//warning
console.warn("Hey please don't drink soda.") //it will show you warning you given

//table
obj = {a:1, b:2, c:3}
console.table(obj)

console.table(console)  //you will see all the methods

//time
console.time("a1")
console.timeEnd("a1")

// e.g1
console.time("forLoop")
for(let i=0; i<5; i++){
    console.log(100);
}
console.timeEnd("forLoop")

//e.g2
console.time("whileLoop")
let i=0;
while(i<5){
    console.log(100);
    i++;
}
console.timeEnd("whileLoop")


// #27 ************* Alert, promt, comfirm (This are part of BOM) ******************
alert("Enter the value of a!")
a = prompt("Enter a here")
document.write(a)

alert("Enter the value of a!")
a = prompt("Enter a here")
a = Number.parseInt(a) //string to number
alert("You entered a of type " + (typeof a))
document.write(a)

alert("Enter the value of a!")
a = prompt("Enter a here")
a = Number.parseInt(a) //string to number
alert("You entered a of type " + (typeof a))
let write = confirm("Do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}


// #28 ************* DOM, BOM, Window object ******************
//DOM - Document object model ==> made HTML page as JS object and named it as document.
//BOM - Browseer object model ==> allows JS to to talk to the browser
window.console.log(window)
console.log(document)
console.log(document.body)
document.body.style.background = "yellow"




// #29 ************* Practice set ******************
// Q.1 WAP using prompt function take age from the user and give alert that wherther he can drive or not

// let age = prompt("Enter your age:")
// age = Number.parseInt(age)
// const canDrive = (age) => {
//     return age>=18? true:false
// }
// if (canDrive(age)) {
//     alert("Yes, you can drive")
// }
// else{
//     alert("You can't drive")
// }


// Q.2 use confirm to askthe user if he wants to see the prompt again
// let runAgain = true;

// const canDrive = (age) => {
//     return age>=18? true:false
// }

// while(runAgain) {
//     let age = prompt("Enter your age:")
//     age = Number.parseInt(age)

//     if (canDrive(age)) {
//         alert("Yes you can drive")
//     }
//     else{
//         alert("You cannot drive")
//     }
//     runAgain = confirm("Do yoy want to play again?")
// }

// Q.3 in above que use console.arror to lag the error if the age entered is negative
let runAgain = true;

const canDrive = (age) => {
    return age>=18? true:false
}

while(runAgain) {
    let age = prompt("Enter your age:")
    age = Number.parseInt(age)
    if(age<0){
        console.error("Please enter the valid age");
        break;
    }

    if (canDrive(age)) {
        alert("Yes you can drive")
    }
    else{
        alert("You cannot drive")
    }
    runAgain = confirm("Do yoy want to play again?")
}

// Q.4 WAP change the url to google.com (redirection) if user enters a number greater than 4
let number = prompt("Enter your number")

if (number > 4){
    location.href = "https://google.com"
}

// Q.5 change the bgcolor of page to yellow, red or any color based on user input through prompt
let color = prompt("Enter teh page background color")
doccument.body.style.background = color


// #30 ****************** Exercise:Snake water gun  *****************
// use JS to create a game of snake water and gun. the game should ask you to enter S, W or G. The computer should able to randomly generate S, W or G and declare Win or Lose using alert. use confirm and prompt wherever required.




// #31 ****************** Walking the DOM *****************
/* In Javascript, DOM can be represented as a tree ->in that 
root element - <html>
elements -> <head>
        <body> --> <title>, <h1>, <a>
*/

// Bootstrap - Most popular HTML, CSS, JS library.
// parent , children, root of html page



// #32 ****************** Children of an element *****************
// DOM collection
// children, sibling, parent of an element

console.log(document.body.firstchild)
console.log(document.body.lastchild)
let arr = array.from(document.body.childnodes)
console.log(arr)

// #33 ****************** sibling, parent of an element *****************



// #34 ******************** Element only navigation **********************

// #35 ******************** Searching the DOM *********************
console.log.getElementByID("header")
console.log.getElementByClassName("nini")

document.querySelector(".classname").style.color = "red"

document.querySelector(".classname").style.background = "red"

console.log(doccument.getElementByTagName);
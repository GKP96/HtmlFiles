//#22. *************    Exercise: Guess the number    ************************
//Q .WAP to generate a random number and store it in a variable, the program then takes a input from the user to tell them whether the guess was correct, greater or less than the original number. (100 - no. of guesses) is the score of the user. The programe is expected to terminate once the number is guessed. no. should be between 1 -100
let isguess = true;
while(isguess) {
  const guess = prompt("Guess a number between 1 to 10 ...");
  let a = Math.floor(Math.random() * 10);
  if(a==0)a = a+1;
  let count = 0;
  if(guess == a ){
    alert("you win ... in " + count +  "attempt");
    isguess= false;
  }else if( guess > a){ 
    count++;
    alert("choose smaller number ...");
  }else {
    count++;
    alert("choose a greater number");
  }
}

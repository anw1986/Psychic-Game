// Psuedo Code
// initialize variables
// 1 computer generates random comp_letter
// 2 user ENTERS letter
// 3 compare user ENTERED data to compuer generated letter
// 4 if same update win counter reset else decrese guesses left


var count_guess=9;
var userguess=[];
var x=0;
var win=0;
var loss=0;

var comp_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
comp_choice=comp_letters[Math.floor(Math.random() * comp_letters.length)];
console.log(comp_choice);
// console.log(count_guess);
document.getElementById("guess_left").innerHTML=count_guess;

document.onkeyup=function(){
    
    userguess[x]=String.fromCharCode(event.keyCode).toLowerCase();

    document.getElementById("guess").innerHTML=userguess;

    count_guess--;
    console.log(x++);
    document.getElementById("guess_left").innerHTML=count_guess;
    
    if (count_guess===0){
        alert("unable to guess letter")
    }
}




// Psuedo Code
// initialize variables
// 1 computer generates random comp_letter
// 2 user ENTERS letter
// 3 compare user ENTERED data to compuer generated letter
// 4 if same update win counter reset else decrese guesses left

// Initialize variables
var count_guess=9;
var userguess=[];
var x=0;
var win=0;
var loss=0;

// initialize computer guess
var comp_letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var comp_choice=comp_letters[Math.floor(Math.random() * comp_letters.length)];
console.log(comp_choice);

// Output inital counter variables on html
document.getElementById("guess_left").innerHTML=count_guess;
document.getElementById("win").innerHTML=win;
document.getElementById("loss").innerHTML=loss;

document.onkeyup=function(event){

    var charCode=event.keyCode;

    

    //check condition if user enters letters only
 
    if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){

        //check condition if element already exist in array

        if(userguess.includes(String.fromCharCode(event.keyCode).toLowerCase())===true){
            alert("letter already exist");
        }

        else{

            //if the element is "new" continue code line

            userguess[x]=String.fromCharCode(event.keyCode).toLowerCase();
            console.log(userguess);
            
            document.getElementById("guess").innerHTML=userguess;
            
            count_guess--;
            document.getElementById("guess_left").innerHTML=count_guess;
            
            // Check for win condition
            
            if (userguess[x]===comp_choice){
                alert("Kuddos!! on guessing the letter" +" "+comp_choice);
                win++; 
                document.getElementById("win").innerHTML=win;
                userguess =[];
                document.getElementById("guess").innerHTML=userguess;
                count_guess=9;
                document.getElementById("guess_left").innerHTML=count_guess;
                x=0;
                
                // re-start with new computer guess
                comp_choice=comp_letters[Math.floor(Math.random() * comp_letters.length)];
                return;
            };
            
            // Check if user is unable to guess
            
            if (count_guess===0){
                alert("Sorry!! You were unable to guess the letter"+" "+comp_choice);
                loss++
                document.getElementById("loss").innerHTML=loss;
                userguess =[];
                document.getElementById("guess").innerHTML=userguess;
                count_guess=9;
                document.getElementById("guess_left").innerHTML=count_guess;
                x=0;
                
                // re-start with new computer guess
                comp_choice=comp_letters[Math.floor(Math.random() * comp_letters.length)];
                return;
            };   
            
            x++;
        };
        console.log(comp_choice);
    }
   
    else{
        alert("Enter letter only");
    };
    // debugger;
};



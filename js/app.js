'use strict';

console.log('JS is loaded');
var totalcount = 0;
var globalUser;
function greet() {
    var username = prompt('What is your name?');
    globalUser = username;
    alert("Welcome " + username);
    console.log(username);
    console.log('Hello ' + username);

    alert('You will know me more!');
}

greet();

function question1() {
    var user = prompt('am I your friend?');
    if (user.toLowerCase() === 'y'|| user.toLowerCase() === 'yes'){
    alert("She is a perfect friend to be with!");
    totalcount++;
    // console.log("Yes, You are correct!");
    }else {
    alert("We are friends!!");
// console.log("No, You are wrong :(");

}
    console.log(user);
}

question1();

function question2 () {
    var animal= prompt('Is she an Elephant lover?');
    if (animal.toLowerCase() === 'y'|| animal.toLowerCase() === 'yes'){
    alert("Yes!Elephants are adorable");
    totalcount++;
    // console.log("Yes, You are correct!");
    } else {
        alert('Oops! We should meet more often to know me better');
        // console.log("No, You are wrong :(");
    }
    console.log(animal);
}

question2();

function question3 () {
    var place = prompt("Is she from United States?");
    if (place.toLowerCase() === 'y'|| place.toLowerCase() === 'yes'){
        alert('No! She is from India');
        totalcount++;
        // console.log("Yes, You are correct!");
    } else {
        alert('Yay! You are correct');
        // console.log("No, You are wrong :(");
    }

    console.log(place);
}

question3();

function question4() {
    var color = prompt('Is Blue her favourite colour?');
    if (color.toLowerCase() === 'y'|| color.toLowerCase() === 'yes'){
        alert('Yes! She is as cool as Blue');
        totalcount++;
        // console.log("Yes, You are correct!");
    } else {
        alert('You are worng');
        // console.log("No, You are wrong :(");
    }
    console.log(color);
}

  question4();

function question5() {
    var edu = prompt('Is she an MBA graduate?');
    if (edu.toLowerCase() === 'y'|| edu.toLowerCase() === 'yes'){
        alert('She will be a great business partner!');
        totalcount++;
        // console.log("Yes, You are correct!");
    }else {
        alert('In fact, she did her MBA in Finance and Marketing!');
        // console.log("No, You are wrong :(");
    }
    // console.log(edu);
}

question5();

function question6() {
    alert('Lets play a game ' + globalUser);


    var correctanswer = Math.floor(Math.random() * 10)+1;

    for (var i=0; i<=4; i++){
        var userguess = parseInt(prompt('Guess a number between 1-10'));
        if(userguess === correctanswer){
            alert('You are correct!');
            totalcount++;
            break;
    
        } else if (userguess < correctanswer){
            alert('You are too low');
        }else if (userguess > correctanswer){
            alert('You are too high');
        }
        if(i===4){
            alert("Correct answer is " + correctanswer);
        }
    }
}   
    // console.log(userguess);
question6();
// Guess my fav place using an array


function question7() {
var ans = ['paris', 'turkey', 'hawaii', 'venice', 'santorini', 'sydney'];

for(var i=0; i<6; i++){
    var favplace = prompt('Guess my favourite place?');
    var ansfound = false;
    for (var j=0; j<ans.length; j++){
        console.log(ans[j]);
        if(favplace.toLowerCase() === ans[j]){
            alert('Correct!');
            ansfound = true;
            totalcount++;
            break;
         }
    }
    if(ansfound === false){
        alert('Incorrect!');
    } else if(ansfound === true){
        break;
    }
}
alert('My favourite places are ' + ans);
}

question7();


alert('Total Correct answers are ' + totalcount);











    







    



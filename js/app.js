'use strict';

console.log('JS is loaded');

    var username = prompt('What is your name?');
    
    alert("Welcome " + username);
    console.log(username);
    console.log('Hello ' + username);

    alert('You will know me more!');


var user = prompt('Am I your friend?');
if (user.toLowerCase() === 'y'|| user.toLowerCase() === 'yes'){
    alert("She is a perfect friend to be with!");
    // console.log("Yes, You are correct!");

}else {
alert("We are friends!!");
// console.log("No, You are wrong :(");

}
    console.log(user);

    var animal = prompt('Is she an Elephant lover?');
    if (animal.toLowerCase() === 'y'|| animal.toLowerCase() === 'yes'){
    alert("Yes!Elephants are adorable");
    // console.log("Yes, You are correct!");
    } else {
        alert('Oops! We should meet more often to know me better');
        // console.log("No, You are wrong :(");
    }
    console.log(animal);


    var place = prompt("Is she from United States?");
    if (place.toLowerCase() === 'y'|| place.toLowerCase() === 'yes'){
        alert('No! She is from India');
        // console.log("Yes, You are correct!");
    } else {
        alert('Yay! You are correct');
        // console.log("No, You are wrong :(");
    }

    console.log(place);


    var color = prompt('Is Blue her favourite colour?');
    if (color.toLowerCase() === 'y'|| color.toLowerCase() === 'yes'){
        alert('Yes! She is as cool as Blue');
        // console.log("Yes, You are correct!");
    } else {
        alert('You are worng');
        // console.log("No, You are wrong :(");
    }
    console.log(color);

    var edu = prompt('Is she an MBA graduate?');
    if (edu.toLowerCase() === 'y'|| edu.toLowerCase() === 'yes'){
        alert('She will be a great business partner!');
        // console.log("Yes, You are correct!");
    }else {
        alert('In fact, she did her MBA in Finance and Marketing!');
        // console.log("No, You are wrong :(");
    }
    console.log(edu);


    alert('Thanks for visiting my site ' + username);



    



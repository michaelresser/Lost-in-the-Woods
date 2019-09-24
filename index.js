//test script
console.log('test');

/* 
Im laying out the named functions in order of their use across the games timeline, and trying to name them sematically. ie: theWoods1, theWoods2, ticTacToe, etc.
Below here, is my idea of mechanics more fleshed out. 

The pattern is prety simple (fingers crossed!):  
    1. Declare the functions list of actions.
    2. Write the function that reacts to the target     button being pressed.
    3. Drink a beer.

-MRE
*/

// CHAPTER 1 - The Woods
// theWoods0 - 
const theWoods0 = () => { 
    //Resets the page.
    //1. log a 'message when button is clicked'
    console.log('theWoods1');
    
    //2. Text Reset
    document.getElementById('ch1-text').innerHTML = "The woods are dark and a little scary. You hear all sorts of animal noises around
    you. What could they be? As you enter a clearing, you see a small black bat hanging from a tree branch. He looks tired.</br>
    Say hello to the bat?";

    //3. Remove Back Button.
    let parent = document.getElementById('ch1-controls');
    let child = document.getElementById('back');
    parent.removeChild(child);
};
document.getElementById('continue').on('click', theWoods0());

// The Bat game
const theWoods1 = () => {
    //1. Log a console message when button is clicked.
    console.log('ch1-01');

    //2. Replace text in with the next scene's dialoge
    document.getElementById('ch1-text').innerHTML = 'You hear a bat futtering around chasing mosquitoes. Would you like to ask it for help?';

    //3. Add a Back button
    document.getElementById('ch1-controls').append(`<button id='back' class=''
    ></i>Back</button>`);
};
document.getElementById('continue').on('click', theWoods1());

// TOP Button

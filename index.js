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
const theWoods0 = () => { 
    //Resets the page.
    //1. log a 'message when button is clicked'
    console.log('theWoods1');
    
    //2. Text Reset
    document.getElementById('ch1-text').innerHTML = 'You find yourself in a dark wood searching for the path home! You must find a way through this maze of trees, and make it to the river.';

    //3. Remove Back Button.
    let parent = document.getElementById('ch1-controls');
    let child = document.getElementById('back');
    parent.removeChild(child);
};
document.getElementById('continue').on('click', theWoods0());

const theWoods1 = () => {
    //1. Log a console message when button is clicked.
    console.log('theWoods1');

    //2. Replace text in with the next scene's dialoge
    document.getElementById('ch1-text').innerHTML = 'You hear a bat futtering around chasing mosquitoes. Would you like to ask it for help?';

    //3. Add a Back button

    document.getElementById('ch1-controls').append(`<button id='back' class=''
    ></i>Back</button>`);
};
document.getElementById('continue').on('click', theWoods1());


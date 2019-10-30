//test script
console.log('test');


/* NAVBAR LOGIC */

// Navbar Responsive script    
const responsiveNavbar = () => {
    if (window.innerWidth < 750) {
        console.log('w: ' + window.innerWidth + ' < 750px');
        document.getElementById('navbar-toggle').classList.remove('hidden');
        document.getElementById('navbar-items').classList.add('hidden');
    } else {
        console.log('w: ' + window.innerWidth + ' > 750px');
        document.getElementById('navbar-toggle').classList.add('hidden');
        document.getElementById('navbar-items').classList.remove('hidden');
    }
};

document.onload = responsiveNavbar();
window.onresize = function () {
    responsiveNavbar();
};

//Navbar Toggle Script
function navbarToggleHidden() {
    document.getElementById('navbar-items').classList.toggle('hidden');
}





/* GAME LOGIC SECTION
Im laying out the named functions in order of their use across the games timeline, and trying to name them sematically. ie: theWoods1, theWoods2, ticTacToe, etc.
Below here, is my idea of mechanics more fleshed out. 

The pattern is prety simple (fingers crossed!):  
    1. Declare the functions list of actions.
    2. Write the function that reacts to the target button being pressed.
    3. Repeat
    4. Drink a beer.

-MRE
*/

// CHAPTER 1 - Bat Encounter
/* This is the code to change the text on the initial button push in the Bat Game
*/


const bat00 = () => {
    //CHANGE IMAGE
    document.getElementById('ch1-image').src = 'images/the-bat-02.png'

    //CHANGE STORY TEXT
    let changedText = '<p class="text-center">You say hello to the bat.  He tries to look up, but can barely move his head. “O-o-oh hello, small human,” he says, “can you help me?  I’ve been flying all night and all day and can’t find my cave!  I can’t see very well, but I can usually hear a river near my home.  Can you help me listen for it?”';
    document.getElementById("ch1-text").innerHTML = changedText;

    //CHANGE BUTTON TEXT
    let continueBtn = document.getElementById('ch1-btn-continue');
    continueBtn.innerHTML = 'Help the bat!';
    continueBtn.setAttribute('onclick', 'bat01()');

}


const bat01 = () => {
    //Change Story Text
    let changedText = 'You nod, and begin listening.  You hear different things in each direction... which one is a river?';
    document.getElementById("ch1-text").innerHTML = changedText;

    //Change Image
    document.getElementById('ch1-image').src = 'images/the-bat-03.png'

    //Remove Continue button
    document.getElementById('ch1-btn-continue').remove();
    console.log('continue button removed');

    //Add Game Components
    document.getElementById('ch1-game').classList.remove('hidden');
    console.log('game component added');
   

}

const playWest = () => {
    document.getElementById('sound01').play();
}
const playNorth = () => {
    document.getElementById('sound02').play();
}
const playEast = () => {
    document.getElementById('sound03').play();
}

const batGameCheckWinner = () => {
    let river = document.getElementById('ch1-game-river');    
    if (river.checked === true) {
        console.log('winner');
        batGameFinale();
        //     Including final Image, final text & continue button.     
    } else {
        console.log('loser');
        // call function to tell player to try again.
    }
} 

const batGameFinale = () => {
    //REMOVE GAEM ELEMENT
    document.getElementById('ch1-game').remove();
    console.log('game removed');
    //CHANGE IMAGE
    document.getElementById('ch1-image').src = '/images/the-bat-04.png'
    // CHANGE TEXT
    document.getElementById('ch1-text').innerHTML = 'Well done!';
    // ADD CONTINUE BUTTON
    document.getElementById('ch1-controls').insertAdjacentHTML('afterbegin',  "<button id='ch1-btn-continue' class=''><a href='#ch2'>Continue to Chapter 2</a></button>")
}



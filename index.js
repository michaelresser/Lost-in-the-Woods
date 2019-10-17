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
    console.log(window.innerWidth);
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


function bat00() {
    //1. Change Story Text
    let changedText = '<p class="text-center">You say hello to the bat.  He tries to look up, but can barely move his head. “O-o-oh hello, small human,” he says, “can you help me?  I’ve been flying all night and all day and can’t find my cave!  I can’t see very well, but I can usually hear a waterfall near my home.  Can you help me listen for it?” You nod, and begin listening.  You hear different things in each direction... which one is a waterfall?</p>';
    let ch1Text = document.getElementById("ch1-text");
    console.log(ch1Text.children);
    ch1Text.insertAdjacentHTML('beforeend', changedText);
    console.log(ch1Text.children);
    ch1Text.children[0].remove();


    //2. Add Audio HTML
    document.getElementById('ch1').insertAdjacentHTML('afterbegin', "<audio id='sound01'><source src='/sounds/stream.mp3' type='audio/mpeg'></source></audio><audio id='sound01'><source src='/sounds/woods.mp3' type='audio/mpeg'></source></audio><audio id='sound03'><source src='/sounds/owl.mp3' type='audio/mpeg'></source></audio>");
    console.log('audio tag added');

    //Remove Continue button
    document.getElementById('btn-ch1-00').remove();
    console.log('continue button removed');

    //Add Audio Buttons
    const newButtonsArr = ["<button id='sound-btn-01' class='game-button' onclick='playWest()'>West</button>", "<button id='sound-btn-02' class='game-button' onclick='playNorth()'>North</button>", "<button id='sound-btn-03' class='game-button' onclick='playEast()'>East</button>"];
    newButtonsArr.forEach(function(item) {
        document.getElementById('ch1-controls').insertAdjacentHTML('afterbegin', item);
        console.log('audio buttons added');
    });

}
function playWest() {
    document.getElementById('sound01').play();
}
function playNorth() {
    document.getElementById('sound02').play();
}
function playEast() {
    document.getElementById('sound03').play();
}

// CHAPTER 1 - The Bat Game - Matching sounds



